function main()
{
	// Call the repository to see if the user is site manager or not
	var userIsSiteManager = false;
	
   // Site ID and component ID
   var siteId = page.url.templateArgs.site,
      objectId = instance.object.id;
	
	// Check to see if user is on user dashboard or site dashboard... 
	// if on site dashboard, check for permission, 
	// if on user dashboard, grant permission
	
	if (page.url.templateArgs.site == null || page.url.templateArgs.site == undefined)
	{
		userIsSiteManager = true;
	}
	else
	{
		json = remote.call("/api/sites/" + page.url.templateArgs.site + "/memberships/" + encodeURIComponent(user.name));

		if (json.status == 200)
		{
			var obj = eval('(' + json + ')');
			if (obj)
			{
				userIsSiteManager = (obj.role == "SiteManager");
			}
		}
	}
	
	model.userIsSiteManager = userIsSiteManager;
	
	var title = args.title;
	var filterPath = args.filterPath;
	
	if (filterPath == null)
	{
		filterPath = "";
	}
	var filterPathView = filterPath != "" ? filterPath.split("|")[1] : "";
	
	// Create XML object to pull values from
	// configuration file
	  
	var conf = new XML(config.script);
	  
	// Use the defaults from the XML configuration file
	// (getlatestdoc.get.config.xml) if no values in args array
	  
	if (!title)		
	{
	    title = conf.title[0].toString();
	}

	if(!filterPathView)
	{
		filterPathView = conf.filterPathView[0].toString();
	}

	var json = remote.call("/politie/get-latest-doc?filterPathView=" + escape(filterPathView));
	if (json.status == 200)
	{
		obj = eval("(" + json + ")");
		model.result = obj;
	}
	else
	{
		obj = eval("(" + json + ")");
		title = "Error";
		obj.name = "";
		obj.nodeRef = "";
		obj.created = "";
		model.result = obj;
	}
	  
   // Set values on the model for use in templates

   model.title = title;
   model.filterPath = filterPath;
   model.filterPathView = filterPathView;

   // Component definition
   var dashlet = {
      id: "GetLatestDoc",
      name: "politie.dashlet.GetLatestDoc",
      assignTo : "dashlet",                   // Need to reference the generated JS object
      options: {
         componentId: objectId,
         siteId: siteId,
         title: title,
         filterPath: filterPath,
         filterPathView: filterPathView
      }
   };

   // Dashlet title bar component actions and resizer
   var actions = [];
   if (userIsSiteManager)
   {
      actions.push(
      {
         cssClass: "edit",
         eventOnClick: { _alfValue : "editDashletEvent", _alfType: "REFERENCE"},
         tooltip: msg.get("dashlet.edit.tooltip")
      });
   }
   actions.push({
      cssClass: "help",
      bubbleOnClick:
      {
         message: msg.get("dashlet.help")
      },
      tooltip: msg.get("dashlet.help.tooltip")
   });

   var dashletResizer = {
      id : "DashletResizer",
      name : "Alfresco.widget.DashletResizer",
      initArgs : ["\"" + args.htmlid + "\"","\"" + objectId + "\""],
      useMessages: false
   };

   var dashletTitleBarActions = {
      id : "DashletTitleBarActions",
      name : "Alfresco.widget.DashletTitleBarActions",
      useMessages : false,
      options : {
         actions: actions
      }
   };

   model.widgets = [dashlet, dashletResizer, dashletTitleBarActions];
}

main();
