<@markup id="css" >
   <#-- CSS Dependencies -->
   <@link rel="stylesheet" type="text/css" group="dashlets"
      href="${page.url.context}/res/someco/components/dashlets/hello-world.css" />
</@>

<@markup id="js">
   <#-- JavaScript Dependencies -->
   <@script type="text/javascript" group="dashlets"
      src="${page.url.context}/res/someco/components/dashlets/hello-world.js"></@script>
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
             <div class="detail-list-item first-item last-item">
                <span><#if greeting=="hello">${msg("label.hello", user.firstName)}<#else>${msg("label.goodbye", user.firstName)}</#if></span>
             </div>
           </div>
        </div>
    </@>
</@>
