MathJax.Extension["TeX/action"]={version:"2.7.8"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var i=MathJax.InputJax.TeX,n=MathJax.ElementJax.mml;i.Definitions.Add({macros:{toggle:"Toggle",mathtip:"Mathtip",texttip:["Macro","\\mathtip{#1}{\\text{#2}}",2]}},null,!0),i.Parse.Augment({Toggle:function(t){for(var a,e=[];"\\endtoggle"!==(a=this.GetArgument(t));)e.push(i.Parse(a,this.stack.env).mml());this.Push(n.maction.apply(n,e).With({actiontype:n.ACTIONTYPE.TOGGLE}))},Mathtip:function(t){var a=this.ParseArg(t),t=this.ParseArg(t);this.Push(n.maction(a,t).With({actiontype:n.ACTIONTYPE.TOOLTIP}))}}),MathJax.Hub.Startup.signal.Post("TeX action Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/action.js");