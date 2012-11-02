<@markup id="css" >
   <#-- CSS Dependencies -->
   <@link rel="stylesheet" type="text/css" href="${page.url.context}/res/someco/components/dashlets/hello-world.css" group="dashlets" />
</@>

<@markup id="js">
   <#-- JavaScript Dependencies -->
   <@script type="text/javascript" src="${page.url.context}/res/someco/components/dashlets/hello-world.js" group="dashlets"></@script>
</@>

<@markup id="widgets">
   <@createWidgets group="dashlets"/>
</@>

<@markup id="html">
   <@uniqueIdDiv>
      <#assign el=args.htmlid?html>
      <div class="dashlet">
         <div class="title">${msg("header")}</div>
         <div class="toolbar flat-button">
            <span class="align-left yui-button yui-menu-button" id="${el}-type">
               <span class="first-child">
                  <button type="button" tabindex="0">${msg("filter.choice1")}</button>
               </span>
            </span>
            <select id="${el}-selectMenu">
               <option value="choice1">${msg("filter.choice1")}</option>
               <option value="choice2">${msg("filter.choice2")}</option>
            </select>
            <span class="align-right yui-button-align">
               <span class="first-child">
                  <a href="#" id="${el}-createSomething" class="theme-color-1">
                     <img src="${url.context}/res/components/images/site-16.png" style="vertical-align: text-bottom" />
                     ${msg("link.createAction")}</a>
               </span>
            </span>
            <div class="clear"></div>
         </div>
         <div class="body scrollableList"<#if args.height??> style="height: ${args.height}px;"</#if>>
            <div class="detail-list-item first-item">
               <span><#if greeting=="hello">${msg("label.hello", user.firstName)}<#else>${msg("label.goodbye", user.firstName)}</#if></span>
            </div>
            <div class="detail-list-item last-item">
               <button id="${el}-testButton">${msg('label.button')}</button>
            </div>
         </div>
      </div>
   </@>
</@>
