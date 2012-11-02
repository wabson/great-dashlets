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
           <div class="body scrollableList"<#if args.height??> style="height: ${args.height}px;"</#if>>
             <div class="detail-list-item first-item">
                <span id="${el}-greeting"><#if greeting=="hello">${msg("label.hello", user.firstName)}<#else>${msg("label.goodbye", user.firstName)}</#if></span>
             </div>
             <div class="detail-list-item last-item">
                <button id="${el}-testButton">${msg('label.button')}</button>
             </div>
           </div>
        </div>
    </@>
</@>
