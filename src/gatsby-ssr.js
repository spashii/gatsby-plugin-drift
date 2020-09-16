import React from 'react';

exports.onRenderBody = (
  { setPostBodyComponents },
  pluginOptions = { enableDuringDevelop: false }
) => {
  if (
    pluginOptions.enableDuringDevelop ||
    process.env.NODE_ENV === 'production'
  ) {
    return setPostBodyComponents([
      <script
        key={'gatsby-plugin-drift'}
        dangerouslySetInnerHTML={{
          __html: `
          window.driftAppId = '${pluginOptions.appId}';
          !function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}();`,
        }}
      />,
    ]);
  }

  return null;
};
