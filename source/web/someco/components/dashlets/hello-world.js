/**
* MyCompany root namespace.
* 
* @namespace MyCompany
*/
if (typeof MyCompany == "undefined" || !MyCompany)
{
   var MyCompany = {};
}

/**
* MyCompany dashlet namespace.
* 
* @namespace MyCompany.dashlet
*/
if (typeof MyCompany.dashlet == "undefined" || !MyCompany.dashlet)
{
   MyCompany.dashlet = {};
}

/**
 * Sample Hello World dashboard component.
 * 
 * @namespace MyCompany.dashlet
 * @class MyCompany.dashlet.HelloWorld
 * @author 
 */
(function()
{
   /**
    * YUI Library aliases
    */
   var Dom = YAHOO.util.Dom,
      Event = YAHOO.util.Event;

   /**
    * Alfresco Slingshot aliases
    */
   var $html = Alfresco.util.encodeHTML,
      $combine = Alfresco.util.combinePaths;

   /**
    * Preferences
    */
   var PREFERENCES_SITES = "com.someco.share.helloWorld",
       PREFERENCES_HELLO_WORLD_FILTER = PREFERENCES_SITES + ".dashlet.filter";

   /**
    * Dashboard HelloWorld constructor.
    * 
    * @param {String} htmlId The HTML id of the parent element
    * @return {MyCompany.dashlet.HelloWorld} The new component instance
    * @constructor
    */
   MyCompany.dashlet.HelloWorld = function HelloWorld_constructor(htmlId)
   {
      MyCompany.dashlet.HelloWorld.superclass.constructor.call(this, "MyCompany.dashlet.HelloWorld", htmlId);

      // Services
      this.services.preferences = new Alfresco.service.Preferences();
      
      return this;
   };

   /**
    * Extend from Alfresco.component.Base and add class implementation
    */
   YAHOO.extend(MyCompany.dashlet.HelloWorld, Alfresco.component.Base,
   {
      /**
       * Selected filter value
       * 
       * @property filter
       * @type String
       */
      filter: null,
      
      /**
       * Object container for initialization options
       *
       * @property options
       * @type object
       */
      options:
      {
         /**
          * List of valid filters
          *
          * @property validFilters
          * @type object
          */
         validFilters:
         {
            "choice1": true,
            "choice2": true
         }
      },

      /**
       * Fired by YUI when parent element is available for scripting
       * 
       * @method onReady
       */
      onReady: function HelloWorld_onReady()
      {
         // Push buttton
         this.widgets.testButton = Alfresco.util.createYUIButton(this, "testButton", this.onButtonClick);
         
         // Dropdown select
         this.widgets.type = Alfresco.util.createYUIButton(this, "type", this.onFilterChange,
         {
            type: "menu",
            menu: "selectMenu",
            lazyloadmenu: false
         });

         // Listen on clicks for the create site link
         Event.addListener(this.id + "-createSomething", "click", this.onCreateSomething, this, true);
         
         // Load preferences
         this.initPreferences();
      },
      
      /**
       * Init cached state from User Preferences
       *
       * @method initPreferences
       */
      initPreferences: function MySites_initPreferences()
      {
         var prefs = this.services.preferences.get();
         
         // Retrieve the filter value for the UI
         var filter = Alfresco.util.findValueByDotNotation(prefs, PREFERENCES_HELLO_WORLD_FILTER, "choice1");
         this.filter = this.options.validFilters.hasOwnProperty(filter) ? filter : "choice1";
         
         // Select the preferred filter in the ui
         this.widgets.type.set("label", this.msg("filter." + this.filter));
         this.widgets.type.value = this.filter;
      },
      
      /**
       * Button click event handler
       * 
       * @method onButtonClick
       * @param p_sType {string} The event
       * @param p_aArgs {array}
       */
      onButtonClick: function HelloWorld_onButtonClick(p_sType)
      {
         window.alert("It works!");
      },
      
      /**
       * Button click event handler
       * 
       * @method onCreateSomething
       * @param p_sType {string} The event
       * @param p_aArgs {array}
       */
      onCreateSomething: function HelloWorld_onCreateSomething(p_sType)
      {
         Alfresco.util.PopupManager.displayPrompt({
            text: this.msg("msg.prompt")
         });
      },
      
      /**
       * Drop-down list click event handler
       * 
       * @method onFilterChange
       * @param p_sType {string} The event
       * @param p_aArgs {array}
       */
      onFilterChange: function HelloWorld_onFilterChange(p_sType, p_aArgs)
      {
         var menuItem = p_aArgs[1];
         if (menuItem)
         {
            // Need to set the button label and value manually
            this.widgets.type.set("label", menuItem.cfg.getProperty("text"));
            this.widgets.type.value = menuItem.value;

            Alfresco.util.PopupManager.displayMessage({
               text: this.msg("msg.selected", menuItem.cfg.getProperty("text"))
            });
            
            // Save preferences
            this.services.preferences.set(PREFERENCES_HELLO_WORLD_FILTER, menuItem.value,
            {
               successCallback:
               {
                  fn: function()
                  {
                     // Update local cached copy of current filter
                     this.filter = menuItem.value;

                     // Trigger any additional behaviour here, e.g. re-loading...
                  },
                  scope: this
               }
            });
         }
      }
      
   });
})();
