<@markup id="css" >
   <#-- CSS Dependencies -->
   <@link rel="stylesheet" type="text/css" href="${page.url.context}/res/someco/components/dashlets/get-latest-doc.css" group="dashlets" /> 
   <#-- Global Folder Select --> 
   <@link rel="stylesheet" type="text/css" href="${page.url.context}/res/modules/documentlibrary/global-folder.css" group="dashlets" />
</@>

<@markup id="js">
   <#-- JavaScript Dependencies -->
   <@script type="text/javascript" src="${page.url.context}/res/someco/components/dashlets/get-latest-doc.js" group="dashlets"></@script>
   <#-- Simple Dialog --> 
   <@script type="text/javascript" src="${page.url.context}/res/modules/simple-dialog.js" group="dashlets"></@script>
   <#-- Global Folder Select --> 
   <@script type="text/javascript" src="${page.url.context}/res/modules/documentlibrary/global-folder.js" group="dashlets"></@script>
   <#-- Resize -->
   <@script type="text/javascript" src="${page.url.context}/res/yui/resize/resize.js" group="dashlets"></@script>
</@>

<@markup id="widgets">
   <@inlineScript group="dashlets">
       /**
        * Create a new custom YUI event and subscribe it to the GetLatestDoc onConfigGetLatestDocClick
        * function. This custom event is then passed into the DashletTitleBarActions widget as
        * an eventOnClick action so that it can be fired when the user clicks on the Edit icon
       */
      var editDashletEvent = new YAHOO.util.CustomEvent("onDashletConfigure");
   </@>
   <@createWidgets group="dashlets"/>
   <@inlineScript group="dashlets">
      editDashletEvent.subscribe(dashlet.onConfigGetLatestDocClick, dashlet, true);
   </@>
</@>

<@markup id="html">
    <@uniqueIdDiv>
        <#assign el=args.htmlid?html>
        <#assign fileExtIndex = result.name?last_index_of(".")> 
        <#assign fileExt = (fileExtIndex > -1)?string(result.name?substring(fileExtIndex + 1)?lower_case, "generic")> 
        <div class="dashlet getlatestdoc">
            <div id="getlatestdoc_title" class="title">${title}</div>
            <div class="body scrollablePanel"<#if args.height??> style="height: ${args.height}px;"</#if> >
                <div id="getlatestdoc_item">
                    <div id="getlatestdoc_item_afb">
                        <a href="${url.context}/page/document-details?nodeRef=${result.nodeRef}">
                        <img src="${url.context}/components/images/filetypes/${fileExt}-file-48.png" onerror="this.src='${url.context}/res/components/images/filetypes/generic-file-48.png'" title="${result.name}" class="node-thumbnail" width="48" />
                        </a>
                    </div>
                    <div id="getlatestdoc_item_info">
                        <a href="${url.context}/page/document-details?nodeRef=${result.nodeRef}">${result.name}</a><br /> ${result.created} <br />
                    </div>
                </div>
            </div>
        </div>
    </@>
</@>