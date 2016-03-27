###CN
<article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-angular-dialog-service" class="anchor" href="#angular-dialog-service" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Angular Dialog Service" data-dst="角对话服务">角对话服务</trans></h1>

<blockquote>
<p><strong><trans data-src="Please use one of the release versions rather than the Master Branch" data-dst="请使用一个版本的发布而不是主分支">请使用一个版本的发布而不是主分支</trans></strong><trans data-src=".  The Master Branch has untested merges and changes and is a work in progress.  I urge you to always use a release version rather than linking directly to the Master Branch, as the Master Branch may change and may not always be backward compatible." data-dst="。主分支有未合并和变化是一个进展中的工作。我劝你总是使用一个版本而不是直接链接到主分支，作为主分支可能发生变化，不可能永远向后兼容。">。主分支有未合并和变化是一个进展中的工作。我劝你总是使用一个版本而不是直接链接到主分支，作为主分支可能发生变化，不可能永远向后兼容。</trans></p>
</blockquote>

<p><strong><trans data-src="v4.x.x + is not backward compatible with versions 1,2,3,3.1  Please refer to the changes section to view what is different in v4.0" data-dst="V4。XX不向后兼容的版本1,2,3,3.1请参阅更改查看不同v4.0是什么">V4。XX不向后兼容的版本1,2,3,3.1请参阅更改查看不同v4.0是什么</trans></strong></p>

<p><trans data-src="A complete AngularJS service with controllers and templates for generating application modals and dialogs for use with Angular-UI-Bootstrap, Twitter Bootstrap and Font-Awesome.  Supports, i18n, language translations for dialog headers, messages and buttons via angular-translate." data-dst="一个用于生成应用模型和对话框使用角UI引导控制器和完整的模板AngularJS的服务，推特Bootstrap和字体真棒。支持i18n，对话框标题语言的翻译，通过翻译信息和键角。">一个用于生成应用模型和对话框使用角UI引导控制器和完整的模板AngularJS的服务，推特Bootstrap和字体真棒。支持i18n，对话框标题语言的翻译，通过翻译信息和键角。</trans></p>

<h2><a id="user-content-installation" class="anchor" href="#installation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Installation" data-dst="安装">安装</trans></h2>

<p><code><trans data-src="bower install angular-dialog-service --save" data-dst="鲍尔安装角对话服务--保存" style="background: transparent;">鲍尔安装角对话服务--保存</trans></code></p>

<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Usage" data-dst="使用">使用</trans></h2>

<div class="highlight highlight-source-js"><pre><span class="pl-k"><trans data-src="var" data-dst="VaR">VaR</trans></span><trans data-src=" app " data-dst="应用">应用</trans><span class="pl-k">=</span> <span class="pl-smi"><trans data-src="angular" data-dst="角">角</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="module" data-dst="模块">模块</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="MyApp" data-dst="MyApp">MyApp</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", [" data-dst="，[">，[</trans><span class="pl-s"><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span><trans data-src="dialogs.main" data-dst="dialogs.main">dialogs.main</trans><span class="pl-pds"><trans data-src="'" data-dst="'"><trans data-src="'" data-dst="'">'</trans></trans></span></span><trans data-src="]);

" data-dst="]）；">]）；</trans><span class="pl-smi"><trans data-src="app" data-dst="应用">应用</trans></span><trans data-src="." data-dst="。">。</trans><span class="pl-en"><trans data-src="controller" data-dst="控制器">控制器</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-s"><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span><trans data-src="MyCtrl" data-dst="myctrl">myctrl</trans><span class="pl-pds"><trans data-src="" "="" data-dst="“">“</trans></span></span><trans data-src=", " data-dst="，">，</trans><span class="pl-k"><trans data-src="function" data-dst="功能">功能</trans></span><trans data-src="(" data-dst="（">（</trans><span class="pl-smi"><trans data-src="dialogs" data-dst="对话框">对话框</trans></span><trans data-src="){
  " data-dst="）{">）{</trans><span class="pl-c"><trans data-src="// open dialogs here" data-dst="/ /打开的对话框，在这里">/ /打开的对话框，在这里</trans></span><trans data-src="
});" data-dst="}）；">}）；</trans></pre></div>

<p><code><trans data-src="dialogs.error('Error','An unknown error occurred preventing the completion of the requested action.');" data-dst="对话框。错误（错误的，一个未知的错误发生防止完成要求的动作。”）">对话框。错误（错误的，一个未知的错误发生防止完成要求的动作。”）</trans></code></p>

<p><code><trans data-src="dialogs.wait('Creating User','Please wait while we attempt to create user " michael="" conroy."&lt;br&gt;&lt;br&gt;this="" should="" only="" take="" a="" moment.',50);"="" data-dst="对话框。等待（'creating用户，请稍候，我们尝试创建用户“米迦勒康罗伊”。<BR> <BR>这应该只需要一瞬间。'，50）">对话框。等待（'creating用户，请稍候，我们尝试创建用户“米迦勒康罗伊”。<br> <br>这应该只需要一瞬间。'，50）</trans></code></p>

<p><code><trans data-src="dialogs.notify('Something Happened','Something happened at this point in the application that I wish to let you know about');" data-dst="对话框。通知（“发生”，“发生在这一点上的应用，我想让你知道的）">对话框。通知（“发生”，“发生在这一点上的应用，我想让你知道的）</trans></code></p>

<p><code><trans data-src="dialogs.create('url/to/a/template','ctrlrToUse',{data: topass,anotherVar: 'value'},{});" data-dst="dialogs.create（“网址/到/模板”，“ctrlrtouse截止日期：“，通过”：价值、anothervar }，{ }）">dialogs.create（“网址/到/模板”，“ctrlrtouse截止日期：“，通过”：价值、anothervar }，{ }）</trans></code></p>

<h3><a id="user-content-api" class="anchor" href="#api" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="API" data-dst="应用程序接口">应用程序接口</trans></h3>

<p><trans data-src="All Dialogs return a object with property " data-dst="所有对话框返回一个对象的属性">所有对话框返回一个对象的属性</trans><code><trans data-src="result" data-dst="结果">结果</trans></code><trans data-src=" which is a promise " data-dst="这是一个承诺">这是一个承诺</trans><code><trans data-src="OK/Yes" data-dst="好的/是的">好的/是的</trans></code><trans data-src=" resolves the promise " data-dst="解决了承诺">解决了承诺</trans><code><trans data-src="Close/Reject/No" data-dst="关闭/拒绝/不">关闭/拒绝/不</trans></code><trans data-src=" rejects the promise" data-dst="拒绝承诺">拒绝承诺</trans></p>

<h4><a id="user-content-dialogserror-dialogsnotify-dialogsconfirm" class="anchor" href="#dialogserror-dialogsnotify-dialogsconfirm" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="dialogs.error, dialogs.notify, dialogs.confirm" data-dst="dialogs.error，dialogs.notify，dialogs.confirm">dialogs.error，dialogs.notify，dialogs.confirm</trans></h4>

<p><code><trans data-src="dialogs.error(header, msg, opts)" data-dst="对话框。误差（头、味精、选择）">对话框。误差（头、味精、选择）</trans></code></p>

<p><code><trans data-src="dialogs.notify(header, msg, opts)" data-dst="对话框。通知（头、味精、选择）">对话框。通知（头、味精、选择）</trans></code></p>

<p><code><trans data-src="dialogs.confirm(header, msg, opts)" data-dst="对话框。确认（头、味精、选择）">对话框。确认（头、味精、选择）</trans></code></p>

<table><thead>
<tr>
<th><trans data-src="Name" data-dst="姓名">姓名</trans></th>
<th><trans data-src="Type" data-dst="类型">类型</trans></th>
<th><trans data-src="Description" data-dst="描述">描述</trans></th>
</tr>
</thead><tbody>
<tr>
<td><trans data-src="header" data-dst="头">头</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="Dialog header text." data-dst="对话框标题文本。">对话框标题文本。</trans></td>
</tr>
<tr>
<td><trans data-src="msg" data-dst="味精">味精</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="Dialog body text." data-dst="对话体文本。">对话体文本。</trans></td>
</tr>
<tr>
<td><trans data-src="opts" data-dst="选择">选择</trans></td>
<td><code><trans data-src="object<IDialogOptions>" data-dst="对象idialogoptions＞＜">对象idialogoptions＞＜</trans></code></td>
<td><trans data-src="Options for the dialog" data-dst="options for the dialog">options for the dialog</trans></td>
</tr>
</tbody></table>

<h4><a id="user-content-dialogswait" class="anchor" href="#dialogswait" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="dialogs.wait" data-dst="dialogs.wait">dialogs.wait</trans></h4>

<p><code><trans data-src="dialogs.wait(header, msg, progress, opts)" data-dst="对话框。等待（头、味精、进步、选择）">对话框。等待（头、味精、进步、选择）</trans></code></p>

<table><thead>
<tr>
<th><trans data-src="Name" data-dst="姓名">姓名</trans></th>
<th><trans data-src="Type" data-dst="类型">类型</trans></th>
<th><trans data-src="Description" data-dst="描述">描述</trans></th>
</tr>
</thead><tbody>
<tr>
<td><trans data-src="header" data-dst="头">头</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="Dialog header text." data-dst="对话框标题文本。">对话框标题文本。</trans></td>
</tr>
<tr>
<td><trans data-src="msg" data-dst="味精">味精</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="Dialog body text." data-dst="对话体文本。">对话体文本。</trans></td>
</tr>
<tr>
<td><trans data-src="progress" data-dst="进步">进步</trans></td>
<td><code><trans data-src="int" data-dst="int"><trans data-src="int" data-dst="int">int</trans></trans></code></td>
<td><trans data-src="progress in percentage" data-dst="进度百分比">进度百分比</trans></td>
</tr>
<tr>
<td><trans data-src="opts" data-dst="选择">选择</trans></td>
<td><code><trans data-src="object<IDialogOptions>" data-dst="对象idialogoptions＞＜">对象idialogoptions＞＜</trans></code></td>
<td><trans data-src="Options for the dialog" data-dst="options for the dialog">options for the dialog</trans></td>
</tr>
</tbody></table>

<h4><a id="user-content-dialogscreate" class="anchor" href="#dialogscreate" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="dialogs.create" data-dst="dialogs.create">dialogs.create</trans></h4>

<p><code><trans data-src="dialogs.create(url, ctrlr, data, opts)" data-dst="对话框。创建（URL、控制器、数据、选择）">对话框。创建（URL、控制器、数据、选择）</trans></code></p>

<table><thead>
<tr>
<th><trans data-src="Name" data-dst="姓名">姓名</trans></th>
<th><trans data-src="Type" data-dst="类型">类型</trans></th>
<th><trans data-src="Description" data-dst="描述">描述</trans></th>
</tr>
</thead><tbody>
<tr>
<td><trans data-src="url" data-dst="URL">URL</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="Template Url" data-dst="模板的URL">模板的URL</trans></td>
</tr>
<tr>
<td><trans data-src="ctrlr" data-dst="控制器">控制器</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="Dialog Controller" data-dst="对话框控件">对话框控件</trans></td>
</tr>
<tr>
<td><trans data-src="data" data-dst="数据">数据</trans></td>
<td><code><trans data-src="object" data-dst="目标">目标</trans></code></td>
<td><trans data-src="data available as a " data"="" service="" in="" the="" controller"="" data-dst="数据可以作为一个“在控制器数据”服务">数据可以作为一个“在控制器数据”服务</trans></td>
</tr>
<tr>
<td><trans data-src="opts" data-dst="选择">选择</trans></td>
<td><code><trans data-src="object<IDialogOptions>" data-dst="对象idialogoptions＞＜">对象idialogoptions＞＜</trans></code></td>
<td><trans data-src="Options for the dialog with the addition of " data-dst="与添加对话框选项">与添加对话框选项</trans><code><trans data-src="copy: false|true" data-dst="复制：假|真实">复制：假|真实</trans></code><trans data-src=" which will copy the data instead of passing reference" data-dst="将复制的数据而不是通过参考">将复制的数据而不是通过参考</trans></td>
</tr>
</tbody></table>

<h4><a id="user-content-idialogoptions-properties" class="anchor" href="#idialogoptions-properties" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="IDialogOptions Properties" data-dst="idialogoptions置业">idialogoptions置业</trans></h4>

<p><trans data-src="Note: All properties are optional" data-dst="注：所有的属性都是可选的">注：所有的属性都是可选的</trans></p>

<table><thead>
<tr>
<th><trans data-src="Name" data-dst="姓名">姓名</trans></th>
<th><trans data-src="Type" data-dst="类型">类型</trans></th>
<th><trans data-src="Description" data-dst="描述">描述</trans></th>
</tr>
</thead><tbody>
<tr>
<td><trans data-src="animation" data-dst="动画">动画</trans></td>
<td><code><trans data-src="boolean" data-dst="布尔">布尔</trans></code></td>
<td><trans data-src="Set to false to disable animations on new modal/backdrop. Does not toggle animations for modals/backdrops that are already displayed." data-dst="设置为false禁用新模态/背景动画。不切换动画模型/背景已经显示。">设置为false禁用新模态/背景动画。不切换动画模型/背景已经显示。</trans></td>
</tr>
<tr>
<td><trans data-src="backdrop" data-dst="背景">背景</trans></td>
<td><code><trans data-src="boolean|string" data-dst="布尔|字符串">布尔|字符串</trans></code></td>
<td><trans data-src="controls the presence of a backdrop Allowed values: - true (default) - false (no backdrop) - 'static' backdrop is present but modal window is not closed when clicking outside of the modal window" data-dst="控制背景的允许值的存在：真实的（默认）-假（无背景）-静态背景存在但模态窗口不关闭的时候点击模态窗口外">控制背景的允许值的存在：真实的（默认）-假（无背景）-静态背景存在但模态窗口不关闭的时候点击模态窗口外</trans></td>
</tr>
<tr>
<td><trans data-src="keyboard" data-dst="键盘">键盘</trans></td>
<td><code><trans data-src="boolean" data-dst="布尔">布尔</trans></code></td>
<td><trans data-src="indicates whether the dialog should be closable by hitting the ESC key" data-dst="指示对话框应该按ESC键可关闭">指示对话框应该按ESC键可关闭</trans></td>
</tr>
<tr>
<td><trans data-src="backdropClass" data-dst="backdropclass">backdropclass</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="additional CSS class(es) to be added to a modal backdrop template" data-dst="额外的CSS类（ES）被添加到一个模态背景模板">额外的CSS类（ES）被添加到一个模态背景模板</trans></td>
</tr>
<tr>
<td><trans data-src="windowClass" data-dst="windowclass">windowclass</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="additional CSS class(es) to be added to a modal window template" data-dst="额外的CSS类（ES）被添加到一个模态窗口模板">额外的CSS类（ES）被添加到一个模态窗口模板</trans></td>
</tr>
<tr>
<td><trans data-src="size" data-dst="大小">大小</trans></td>
<td><code><trans data-src="string" data-dst="字符串">字符串</trans></code></td>
<td><trans data-src="Optional suffix of modal window class. The value used is appended to the " data-dst="模态窗口类可选的后缀。使用的价值附加到">模态窗口类可选的后缀。使用的价值附加到</trans><code><trans data-src="modal-" data-dst="模态—">模态—</trans></code><trans data-src=" class, i.e. a value of " data-dst="类，即价值">类，即价值</trans><code><trans data-src="sm" data-dst="SM">SM</trans></code><trans data-src=" gives " data-dst="给出了">给出了</trans><code><trans data-src="modal-sm" data-dst="模态SM">模态SM</trans></code><trans data-src="." data-dst="。">。</trans></td>
</tr>
</tbody></table>

<p><trans data-src="TODO: Add more usage explanations." data-dst="待办事项：添加更多的使用说明。">待办事项：添加更多的使用说明。</trans></p>

<h2><a id="user-content-demos" class="anchor" href="#demos" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Demos" data-dst="演示">演示</trans></h2>

<ul>
<li><trans data-src="v4.2 : " data-dst="V4.2：">V4.2：</trans><a href="http://codepen.io/m-e-conroy/pen/rkIqv"><trans data-src="Codepen: http://codepen.io/m-e-conroy/pen/rkIqv" data-dst="CodePen：http://codepen.io/m-e-conroy/pen/rkiqv">CodePen：http://codepen.io/m-e-conroy/pen/rkiqv</trans></a></li>
<li><trans data-src="v4.2 : " data-dst="V4.2：">V4.2：</trans><a href="http://codepen.io/m-e-conroy/pen/DAxzs"><trans data-src="Codepen: with UI-Bootstrap Date Picker directive" data-dst="CodePen：UI启动日期选择器指令">CodePen：UI启动日期选择器指令</trans></a></li>
<li><trans data-src="v2.0 : " data-dst="功能：">功能：</trans><a href="http://codepen.io/m-e-conroy/pen/AmBpL"><trans data-src="Codepen: http://codepen.io/m-e-conroy/pen/AmBpL" data-dst="CodePen：http://codepen.io/m-e-conroy/pen/ambpl">CodePen：http://codepen.io/m-e-conroy/pen/ambpl</trans></a></li>
<li><trans data-src="v1.0 : " data-dst="V1.0。">V1.0。</trans><a href="http://codepen.io/m-e-conroy/pen/ALsdF"><trans data-src="Codepen: http://codepen.io/m-e-conroy/pen/ALsdF" data-dst="CodePen：http://codepen.io/m-e-conroy/pen/alsdf">CodePen：http://codepen.io/m-e-conroy/pen/alsdf</trans></a></li>
</ul>

<h2><a id="user-content-release-versions" class="anchor" href="#release-versions" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Release Versions" data-dst="发布版本">发布版本</trans></h2>

<ul>
<li><trans data-src="v5.2.8 : Patched problem with animations when ngAnimate is available and using Angular-Bootstrap 0.13.0 " data-dst="v5.2.8：nganimate可利用角引导0.1~3.0当修补问题的动画">v5.2.8：nganimate可利用角引导0.1~3.0当修补问题的动画</trans><a href="https://github.com/m-e-conroy/angular-dialog-service/issues/117"><trans data-src="(issue #117)" data-dst="（问题# 117）">（问题# 117）</trans></a></li>
<li><trans data-src="v5.2.5 : Better detection of Font-Awesome if style sheet has been concatentated.  Tested against Angular 1.3.0 &amp; Angular-Bootstrap 0.11.2" data-dst="v5.2.5：更好地检测字体真棒如果样式表已经concatentated。测试角1.3.0及角引导0.11.2">v5.2.5：更好地检测字体真棒如果样式表已经concatentated。测试角1.3.0及角引导0.11.2</trans></li>
<li><trans data-src="v5.2.2 - v5.2.4 : small bugs fixes" data-dst="v5.2.2 - v5.2.4：小错误修复">v5.2.2 - v5.2.4：小错误修复</trans></li>
<li><trans data-src="v5.2.1 : supports Font-Awesome" data-dst="v5.2.1：支持字体真棒">v5.2.1：支持字体真棒</trans></li>
<li><trans data-src="v5.2.x : Angular-Translate made optional" data-dst="V5.2。X：角翻译可选">V5.2。X：角翻译可选</trans></li>
<li><trans data-src="v4.2.0 - v5.x.x+ : supports AngularJS 1.2 +, Angular UI Bootstrap 0.11.0, Bootstrap 3.1 +" data-dst="03 - V5。XX：支持AngularJS 1.2角界面引导0.11.0，引导3.1">03 - V5。XX：支持AngularJS 1.2角界面引导0.11.0，引导3.1</trans></li>
<li><trans data-src="v4.0.0 - v4.1.0 : supports AngularJS 1.2 +, Angular UI Bootstrap 0.10.0, Bootstrap 3 +" data-dst="V4.0.0 - v4.1.0：支持AngularJS 1.2角界面引导0.10.0，引导3">V4.0.0 - v4.1.0：支持AngularJS 1.2角界面引导0.10.0，引导3</trans></li>
<li><trans data-src="v3.0 : supports AngularJS 1.2 +, Angular UI Bootstrap 0.10.0" data-dst="V3.0：支持AngularJS 1.2角界面引导0.10.0">V3.0：支持AngularJS 1.2角界面引导0.10.0</trans></li>
<li><trans data-src="v2.0 : supports AngularJS 1.2 +" data-dst="1.2┊支持angularjs：">1.2┊支持angularjs：</trans></li>
<li><trans data-src="v1.0 : supports AngularJS 1.1.5 and below." data-dst="V1.0：支持1.1.5以下AngularJS。">V1.0：支持1.1.5以下AngularJS。</trans></li>
</ul>

<h2><a id="user-content-v528" class="anchor" href="#v528" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.2.8" data-dst="v5.2.8">v5.2.8</trans></h2>

<ol>
<li><trans data-src="Added support for these options: animation &amp; backdropClass - because there is a problem when using Angular-Bootstrap 0.13.0's modal with ngAnimate (Angular v1.4) animation is turned off by default (" data-dst="添加这些选项的支持：动漫backdropclass -因为有一个问题，当使用Bootstrap 0.1~3.0的模态与nganimate角（角v1.4）动画默认是关闭的（">添加这些选项的支持：动漫backdropclass -因为有一个问题，当使用Bootstrap 0.1~3.0的模态与nganimate角（角v1.4）动画默认是关闭的（</trans><a href="https://github.com/angular-ui/bootstrap/issues/3633"><trans data-src="https://github.com/angular-ui/bootstrap/issues/3633" data-dst="https://github.com/angular-ui/bootstrap/issues/3633"><trans data-src="https://github.com/angular-ui/bootstrap/issues/3633" data-dst="https://github.com/angular-ui/bootstrap/issues/3633">https://github.com/angular-ui/bootstrap/issues/3633</trans></trans></a><trans data-src=")" data-dst="）">）</trans></li>
</ol>

<h2><a id="user-content-v521" class="anchor" href="#v521" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.2.1" data-dst="v5.2.1">v5.2.1</trans></h2>

<ol>
<li><trans data-src="Added support for Font-Awesome." data-dst="添加字体的强大支持。">添加字体的强大支持。</trans></li>
<li><trans data-src="Added Example/faChk.html to show font-awesome inclusion." data-dst="添加例子/ fachk.html显示字体真棒夹杂。">添加例子/ fachk.html显示字体真棒夹杂。</trans></li>
</ol>

<h2><a id="user-content-v520" class="anchor" href="#v520" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.2.0" data-dst="v5.2.0">v5.2.0</trans></h2>

<ol>
<li><trans data-src="Made Angular-Translate dependency optional." data-dst="使角翻译依赖可选。">使角翻译依赖可选。</trans></li>
<li><trans data-src="Added Example/index2.html to show dialog service working without including Angular-Translate." data-dst="添加例子/ index2.html显示对话框的服务工作不包括角翻译。">添加例子/ index2.html显示对话框的服务工作不包括角翻译。</trans></li>
</ol>

<h2><a id="user-content-v513" class="anchor" href="#v513" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.1.3" data-dst="v5.1.3">v5.1.3</trans></h2>

<ol>
<li><trans data-src="Bug fixes with regards to v5.1.2 #2 (issue #64)" data-dst="bug修复方面的v5.1.2 # 2（问题# 64）">bug修复方面的v5.1.2 # 2（问题# 64）</trans></li>
</ol>

<h2><a id="user-content-v512" class="anchor" href="#v512" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.1.2" data-dst="v5.1.2">v5.1.2</trans></h2>

<ol>
<li><trans data-src="Bug fix for _setOpts (issue #61)." data-dst="错误修复_setopts（问题# 61）。">错误修复_setopts（问题# 61）。</trans></li>
<li><trans data-src="Changed the way resolved " data-dst="改变的方式解决">改变的方式解决</trans><em><trans data-src="header" data-dst="头">头</trans></em><trans data-src=" and " data-dst="和">和</trans><em><trans data-src="msg" data-dst="味精">味精</trans></em><trans data-src=" data is passed to the controller, so it would be easier to " data-dst="数据传递给控制器，这样会更容易">数据传递给控制器，这样会更容易</trans><strong><trans data-src="decorate" data-dst="装饰">装饰</trans></strong><trans data-src=" each service if one so desires (issue #60)." data-dst="每个服务如果一个愿望（问题# 60）。">每个服务如果一个愿望（问题# 60）。</trans></li>
</ol>

<h2><a id="user-content-v510" class="anchor" href="#v510" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.1.0" data-dst="v5.1.0">v5.1.0</trans></h2>

<ol>
<li><trans data-src="Fixed Wait dialog template, header should now display a passed parameter header to the wait service.  Prior to this it would always display the default header whether or not a passed header parameter was used or not." data-dst="固定等待对话框模板，头现在应该显示一个传递参数头等待服务。这将始终显示默认标题是否通过表头参数被使用或不前。">固定等待对话框模板，头现在应该显示一个传递参数头等待服务。这将始终显示默认标题是否通过表头参数被使用或不前。</trans></li>
<li><trans data-src="Default translations have been removed from the dialogs.main module to their own module, in order to support applications that were already using Angular-Translate and had already defined translation lists for 'en-US.'  Previously including dialogs.main would have overwritten those translation lists supplied elsewhere in an application.  To use the default translations:

" data-dst="默认的翻译已经从dialogs.main模块自身的模块删除，以支持应用程序已经在使用角翻译已经翻译定义列表“en-US”。此前包括dialogs.main会覆盖那些翻译列表中其他地方提供的。使用默认的翻译：">默认的翻译已经从dialogs.main模块自身的模块删除，以支持应用程序已经在使用角翻译已经翻译定义列表“en-US”。此前包括dialogs.main会覆盖那些翻译列表中其他地方提供的。使用默认的翻译：</trans><ul>
<li><trans data-src="Include the dialogs-default-translations.min.js file in your HTML file and add 'dialogs.default-translations' to your application's dependency list along with 'dialogs.main'" data-dst="包括在您的HTML文件的dialogs-default-translations.min.js文件并添加”对话框。默认翻译”到你的应用程序的依赖项列表以及“主要”对话框。">包括在您的HTML文件的dialogs-default-translations.min.js文件并添加”对话框。默认翻译”到你的应用程序的依赖项列表以及“主要”对话框。</trans></li>
<li><trans data-src="OR If you already had a translation list setup elsewhere in your application just copy the $translationProvider translation list in the dialogs-default-translations module to where-ever it is that you have your list configured" data-dst="如果你已经有了一个翻译列表设置其他应用程序复制在对话框的默认的翻译模块，在以往是translationprovider美元翻译列表，你有你的列表配置">如果你已经有了一个翻译列表设置其他应用程序复制在对话框的默认的翻译模块，在以往是translationprovider美元翻译列表，你有你的列表配置</trans></li>
</ul></li>
</ol>

<h2><a id="user-content-v500" class="anchor" href="#v500" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.0.0" data-dst="v5.0.0">v5.0.0</trans></h2>

<p><trans data-src="Re-introduction of the [opts] parameter to dialogs methods.  I had many complaints about removing method level options in favor of wholly using the provider instead." data-dst="[选择]的重新引入参数对话框的方法。我有很多关于去除全部使用提供商转而青睐的方法选择投诉。">[选择]的重新引入参数对话框的方法。我有很多关于去除全部使用提供商转而青睐的方法选择投诉。</trans></p>

<ol>
<li><trans data-src="dialogs.error(header,msg[,opts])" data-dst="对话框。误差（头，味精[选择]）">对话框。误差（头，味精[选择]）</trans></li>
<li><trans data-src="dialogs.wait(header,msg,progress[,opts])" data-dst="对话框。等待（头、味精、进步[选择]）">对话框。等待（头、味精、进步[选择]）</trans></li>
<li><trans data-src="dialogs.notify(header,msg[,opts])" data-dst="对话框。通知（头，味精[选择]）">对话框。通知（头，味精[选择]）</trans></li>
<li><trans data-src="dialogs.confirm(header,msg[,opts])" data-dst="对话框。确认（头，味精[选择]）">对话框。确认（头，味精[选择]）</trans></li>
<li><trans data-src="dialogs.create(url,ctrlr,data[,opts])" data-dst="对话框。创建（URL、控制器、数据[选择]）">对话框。创建（URL、控制器、数据[选择]）</trans></li>
</ol>

<h2><a id="user-content-v420" class="anchor" href="#v420" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v4.2.0" data-dst="03">03</trans></h2>

<p><trans data-src="Bootstrap 3.1.1 / Angular UI Bootstrap 0.11.0 introduced a size property for dialogs.  This can be controlled via the provider or by the optional " data-dst="Bootstrap 3.1.1 /角UI引导0.11.0介绍对话框大小属性。这可以通过控制供应商或可选">Bootstrap 3.1.1 /角UI引导0.11.0介绍对话框大小属性。这可以通过控制供应商或可选</trans><em><trans data-src="sz" data-dst="深圳">深圳</trans></em><trans data-src=" parameter to the dialog methods." data-dst="参数对话框的方法。">参数对话框的方法。</trans></p>

<ol>
<li><trans data-src="dialogs.error(header,msg[,sz])" data-dst="对话框。误差（头，味精[尺码]）">对话框。误差（头，味精[尺码]）</trans></li>
<li><trans data-src="dialogs.wait(header,msg,progress[,sz])" data-dst="对话框。等待（头、味精、进步[尺码]）">对话框。等待（头、味精、进步[尺码]）</trans></li>
<li><trans data-src="dialogs.notify(header,msg[,sz])" data-dst="对话框。通知（头，味精[尺码]）">对话框。通知（头，味精[尺码]）</trans></li>
<li><trans data-src="dialogs.confirm(header,msg[,sz])" data-dst="对话框。确认（头，味精[尺码]）">对话框。确认（头，味精[尺码]）</trans></li>
<li><trans data-src="dialogs.create(url,ctrlr,data[,sz])" data-dst="对话框。创建（URL、控制器、数据[尺码]）">对话框。创建（URL、控制器、数据[尺码]）</trans></li>
</ol>

<h2><a id="user-content-v400---410" class="anchor" href="#v400---410" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v4.0.0 - 4.1.0" data-dst="v4.0.0 - 4.1.0">v4.0.0 - 4.1.0</trans></h2>

<p><trans data-src="Removed " data-dst="删除">删除</trans><em><trans data-src="opts" data-dst="选择">选择</trans></em><trans data-src=" and " data-dst="和">和</trans><em><trans data-src="static" data-dst="静态">静态</trans></em><trans data-src=" parameters from dialog methods in favor of provider settings.  The dialogs service is now longer " data-dst="在提供程序设置对话框的方法有参数。对话服务现在已不再">在提供程序设置对话框的方法有参数。对话服务现在已不再</trans><strong><trans data-src="$dialogs" data-dst="美元的对话框">美元的对话框</trans></strong><trans data-src=", the " data-dst="，的">，的</trans><em><trans data-src="\$" data-dst="美元">美元</trans></em><trans data-src=" has be removed as this is reserved for Angular core services." data-dst="有这是保留核心服务删除角。">有这是保留核心服务删除角。</trans></p>

<ol>
<li><trans data-src="dialogs.error(header,msg)" data-dst="对话框的错误（头，味精）。">对话框的错误（头，味精）。</trans></li>
<li><trans data-src="dialogs.wait(header,msg,progress)" data-dst="对话框。等待（头、味精、进步）">对话框。等待（头、味精、进步）</trans></li>
<li><trans data-src="dialogs.notify(header,msg)" data-dst="对话框通知（头、味精）。">对话框通知（头、味精）。</trans></li>
<li><trans data-src="dialogs.confirm(header,msg)" data-dst="确认对话框（头、味精）。">确认对话框（头、味精）。</trans></li>
<li><trans data-src="dialogs.create(url,ctrlr,data)" data-dst="对话框。创建（URL、控制器、数据）">对话框。创建（URL、控制器、数据）</trans></li>
</ol>

<h2><a id="user-content-v10---v310" class="anchor" href="#v10---v310" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v1.0 - v3.1.0" data-dst="v3.1.0 V1.0">v3.1.0 V1.0</trans></h2>

<p><trans data-src="Predefined dialogs/modals." data-dst="预定义对话框/情态动词。">预定义对话框/情态动词。</trans></p>

<ol>
<li><trans data-src="$dialogs.error(header,msg,[static])" data-dst="为对话框。误差（头，味精，[静]）">为对话框。误差（头，味精，[静]）</trans></li>
<li><trans data-src="$dialogs.wait(header,msg,progess,[static])" data-dst="为对话框。等待（头、味精、过程、[静态]）">为对话框。等待（头、味精、过程、[静态]）</trans></li>
<li><trans data-src="$dialogs.notify(header,msg,[static])" data-dst="为对话框。通知（头，味精，[静]）">为对话框。通知（头，味精，[静]）</trans></li>
<li><trans data-src="$dialogs.confirm(header,msg,[static])" data-dst="为对话框。确认（头，味精，[静]）">为对话框。确认（头，味精，[静]）</trans></li>
<li><trans data-src="$dialogs.create(url,ctrlr,data,opts)" data-dst="为对话框。创建（URL、控制器、数据、选择）">为对话框。创建（URL、控制器、数据、选择）</trans></li>
</ol>

<h2><a id="user-content-dependencies" class="anchor" href="#dependencies" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Dependencies" data-dst="依赖">依赖</trans></h2>

<h2><a id="user-content-v521-" class="anchor" href="#v521-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.2.1 +" data-dst="v5.2.1">v5.2.1</trans></h2>

<ol>
<li><a href="http://fortawesome.github.io/Font-Awesome/"><trans data-src="Font-Awesome" data-dst="字体真棒">字体真棒</trans></a><trans data-src=" is now an optional CSS inclusion." data-dst="现在是一个可选的CSS夹杂。">现在是一个可选的CSS夹杂。</trans></li>
</ol>

<h2><a id="user-content-v52x-" class="anchor" href="#v52x-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v5.2.x +" data-dst="v5.2.x">v5.2.x</trans></h2>

<ol>
<li><a href="https://github.com/angular-translate"><trans data-src="Angular Translate" data-dst="角转换">角转换</trans></a><trans data-src=" is now optional." data-dst="现在是可选的。">现在是可选的。</trans></li>
</ol>

<h2><a id="user-content-v420--v5xx" class="anchor" href="#v420--v5xx" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v4.2.0 &amp; v5.x.x" data-dst="与v5.x.x 03">与v5.x.x 03</trans></h2>

<p><trans data-src="Same as v4.0.0 with the exception of the following:" data-dst="同下列例外V4.0.0：">同下列例外V4.0.0：</trans></p>

<ol>
<li><a href="http://angular-ui.github.io/bootstrap/#/modal"><trans data-src="Angular UI Bootstrap Modal 0.11.0, with templates" data-dst="角UI引导模态0.11.0，模板">角UI引导模态0.11.0，模板</trans></a></li>
<li><a href="http://getbootstrap.com"><trans data-src="Twitter Bootstrap CSS 3.1.x" data-dst="推特Bootstrap CSS 3.1 X。">推特Bootstrap CSS 3.1 X。</trans></a></li>
</ol>

<h2><a id="user-content-v400---v410" class="anchor" href="#v400---v410" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v4.0.0 - v4.1.0" data-dst="v4.0.0 -软件-最新">v4.0.0 -软件-最新</trans></h2>

<ol>
<li><trans data-src="AngularJS 1.2 +" data-dst="angularjs 1.2">angularjs 1.2</trans></li>
<li><a href="http://angular-ui.github.io/bootstrap/#/modal"><trans data-src="Angular UI Bootstrap Modal 0.10.0, with templates" data-dst="角UI引导模态0.10.0，模板">角UI引导模态0.10.0，模板</trans></a></li>
<li><trans data-src="Twitter Bootstrap CSS 3 + (includes 3.1.1)" data-dst="推特Bootstrap CSS 3（包括3.1.1）">推特Bootstrap CSS 3（包括3.1.1）</trans></li>
<li><trans data-src="Angular ngSanitize" data-dst="角ngSanitize可">角ngSanitize可</trans></li>
<li><a href="https://github.com/angular-translate"><trans data-src="Angular Translate" data-dst="角转换">角转换</trans></a></li>
</ol>

<h2><a id="user-content-v30" class="anchor" href="#v30" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v3.0" data-dst="V3.0">V3.0</trans></h2>

<ol>
<li><trans data-src=" AngularJS 1.2 +" data-dst="angularjs 1.2">angularjs 1.2</trans></li>
<li><trans data-src=" Angular UI Bootstrap 0.10.0" data-dst="角UI引导0.10.0">角UI引导0.10.0</trans></li>
<li><trans data-src=" Twitter Bootstrap CSS 3.0.3" data-dst="推特Bootstrap CSS 3.0.3">推特Bootstrap CSS 3.0.3</trans></li>
<li><trans data-src=" AngularJS ngSanitize" data-dst="AngularJS ngSanitize可">AngularJS ngSanitize可</trans></li>
</ol>

<h2><a id="user-content-v20-additional-dependencies" class="anchor" href="#v20-additional-dependencies" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v2.0 Additional Dependencies" data-dst="V2.0额外的依赖关系">V2.0额外的依赖关系</trans></h2>

<ol>
<li><trans data-src=" All version 1.0 dependencies." data-dst="所有版本1的依赖。">所有版本1的依赖。</trans></li>
<li> <a href="http://code.angularjs.org/1.2.1/angular-sanitize.min.js"><trans data-src="Angular JS ngSanitize" data-dst="JS ngSanitize可角">JS ngSanitize可角</trans></a>

<ul>
<li><a href="http://docs.angularjs.org/api/ngSanitize"><trans data-src="ngSanitize" data-dst="ngSanitize可">ngSanitize可</trans></a><trans data-src=" (needed for ng-bind-html)" data-dst="（NG绑定HTML需要）">（NG绑定HTML需要）</trans></li>
</ul></li>
</ol>

<h2><a id="user-content-v10" class="anchor" href="#v10" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="v1.0" data-dst="V1.0">V1.0</trans></h2>

<ol>
<li> <a href="http://www.angularjs.org"><trans data-src="Angular JS" data-dst="角的JS">角的JS</trans></a><trans data-src=" (version 1.1.5 and less)" data-dst="（版本1.1.5少）">（版本1.1.5少）</trans></li>
<li> <a href="http://angular-ui.github.io/bootstrap/#/modal"><trans data-src="Angular UI Bootstrap" data-dst="角的界面引导">角的界面引导</trans></a> (version &lt;= 0.6.0, Non-Bootstrap 3 Branch) with embedded templates.</li>
<li> <a href="http://getbootstrap.com"><trans data-src="Twitter Bootstrap CSS" data-dst="推特Bootstrap CSS">推特Bootstrap CSS</trans></a><trans data-src=" (version 2)" data-dst="（2版）">（2版）</trans></li>
</ol>

<h2><a id="user-content-css" class="anchor" href="#css" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="CSS" data-dst="CSS">CSS</trans></h2>

<p><trans data-src="Included a css file that has a .modal class fix for Bootstrap and also has some predefined styles for the various modals described in the service." data-dst="包括一个CSS文件中，有一类固定。模态Bootstrap和也在服务描述的各种情态动词的一些预定义的样式。">包括一个CSS文件中，有一类固定。模态Bootstrap和也在服务描述的各种情态动词的一些预定义的样式。</trans></p>

<p><strong><trans data-src="v3.0 css file has the .modal class removed that had been a fix for a Bootstrap 3 display problem.  This has since been rectified by Angular UI and Bootstrap." data-dst="V3.0的CSS文件的删除。众数已修复引导3显示问题。这已经被角的UI和引导纠正。">V3.0的CSS文件的删除。众数已修复引导3显示问题。这已经被角的UI和引导纠正。</trans></strong></p>

<h2><a id="user-content-changes" class="anchor" href="#changes" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Changes" data-dst="变化">变化</trans></h2>

<ul>
<li><trans data-src="v5.2.1" data-dst="v5.2.1"><trans data-src="v5.2.1" data-dst="v5.2.1">v5.2.1</trans></trans></li>
<li><p><trans data-src="If you use Font-Awesome, support is now provided for the icons used in the headers of each predefined dialog.  The dialog service will automatically detect whether you have Font-Awesome loaded or not and use FA icons or the Bootstrap's glyphicons accordingly.  If for some reason the detection doesn't work correctly you can force the use of FA icons by injecting " data-dst="如果你使用字体真棒，支持现在提供用于每个预定义对话框的标题图标。对话服务会自动检测你是否有字体真棒装或不使用FA图标或引导的glyphicons因此。如果由于某种原因，检测工作不正常，你可以通过注射力FA图标的使用">如果你使用字体真棒，支持现在提供用于每个预定义对话框的标题图标。对话服务会自动检测你是否有字体真棒装或不使用FA图标或引导的glyphicons因此。如果由于某种原因，检测工作不正常，你可以通过注射力FA图标的使用</trans><em><trans data-src="dialogsProvider" data-dst="dialogsprovider">dialogsprovider</trans></em><trans data-src=" into your module's config function and calling " data-dst="为你的模块的配置功能和呼叫">为你的模块的配置功能和呼叫</trans><strong><trans data-src="dialogsProvider.useFontAwesome()" data-dst="dialogsprovider。usefontawesome()">dialogsprovider。usefontawesome()</trans></strong><trans data-src="." data-dst="。">。</trans></p></li>
<li><p><trans data-src="v5.2.x" data-dst="v5.2.x"><trans data-src="v5.2.x" data-dst="v5.2.x">v5.2.x</trans></trans></p></li>
<li><trans data-src="Angular-Translate is now optional, however in order to keep support for Angular-Translate and be able to switch it on and off easily without having to add lines of code to your modules I created a substitute module that is automatically included and used when Angular-Translate is not found.  This subsitute (" data-dst="角翻译现在是可选的，但是为了保持支持角翻译可以切换和关闭它容易无需添加代码到你的模块，我创建了一个替代的模块，自动收录和使用时没有发现角翻译。这类（">角翻译现在是可选的，但是为了保持支持角翻译可以切换和关闭它容易无需添加代码到你的模块，我创建了一个替代的模块，自动收录和使用时没有发现角翻译。这类（</trans><em><trans data-src="translate-substitution.js : translate.sub" data-dst="translate-substitution.js：translate.sub">translate-substitution.js：translate.sub</trans></em><trans data-src=") is a provider service (" data-dst="）是一个提供服务（">）是一个提供服务（</trans><em><trans data-src="$translateProvider" data-dst="translateprovider美元">translateprovider美元</trans></em><trans data-src=") with the same " data-dst="）同">）同</trans><em><trans data-src="translations" data-dst="翻译">翻译</trans></em><trans data-src=" method as the Angular-Translate provider service does.  The provider service is also named " data-dst="方法为角翻译服务提供商不。供应商的服务也叫">方法为角翻译服务提供商不。供应商的服务也叫</trans><em><trans data-src="$translate" data-dst="美元？">美元？</trans></em><trans data-src=" and has its own " data-dst="并有自己的">并有自己的</trans><em><trans data-src="instant" data-dst="即时">即时</trans></em><trans data-src=" method.  I did this such that, if in the future you do decide to use Angular-Translate all you will have to do is load the module before the dialog's service is loaded." data-dst="方法这是我做的这样，将来如果你决定要用角把所有你需要做的是在对话框的服务加载的模块。">方法这是我做的这样，将来如果你决定要用角把所有你需要做的是在对话框的服务加载的模块。</trans></li>
<li><p><trans data-src="The " data-dst="这个">这个</trans><em><trans data-src="dialogs-default-translations.js" data-dst="dialogs-default-translations.js"><trans data-src="dialogs-default-translations.js" data-dst="dialogs-default-translations.js">dialogs-default-translations.js</trans></trans></em><trans data-src=" file is also now an optional dependency." data-dst="现在也是一个可选的依赖文件。">现在也是一个可选的依赖文件。</trans></p></li>
<li><p><trans data-src="v5.1.0" data-dst="v5.1.0"><trans data-src="v5.1.0" data-dst="v5.1.0">v5.1.0</trans></trans></p></li>
<li><p><trans data-src="Separated out the default translations into their own module: " data-dst="分离出来的默认翻译成他们自己的模块：">分离出来的默认翻译成他们自己的模块：</trans><strong><trans data-src="dialogs-default-translations.js" data-dst="dialogs-default-translations.js"><trans data-src="dialogs-default-translations.js" data-dst="dialogs-default-translations.js">dialogs-default-translations.js</trans></trans></strong><trans data-src="  Include this or the &quot;min&quot; version in your application if you are not already using $translationProvider elsewhere, otherwise just copy the translation list within the module to your translation list for 'en-US.'" data-dst="包括这个或“民”的版本在你的应用程序如果你还没有使用translationprovider美元的其他地方，否则只是复制翻译列表模块内的翻译列表“en-US”。">包括这个或“民”的版本在你的应用程序如果你还没有使用translationprovider美元的其他地方，否则只是复制翻译列表模块内的翻译列表“en-US”。</trans></p></li>
<li><p><trans data-src="v5.0.0" data-dst="v5.0.0"><trans data-src="v5.0.0" data-dst="v5.0.0">v5.0.0</trans></trans></p></li>
<li><p><trans data-src="Optionally pass in options object, possible overrides are as follows" data-dst="在选择对象通过可选的，可能重写如下">在选择对象通过可选的，可能重写如下</trans></p>

<pre><code>opts = {
    'keyboard': true or false
    'backdrop': 'static' or true or false
    'size': 'sm' or 'lg' //small or large modal size
    'windowClass': 'dialogs-default' // additional CSS class(es) to be added to a modal window
    'copy': true or false // used only with create custom dialog
}
</code></pre></li>
<li><p><trans data-src="v4.2.0" data-dst="03">03</trans></p></li>
<li><p><trans data-src="Supports everything described above in v4.0.0 - v4.1.0 and added the following" data-dst="支持上述的一切在V4.0.0 - v4.1.0添加以下">支持上述的一切在V4.0.0 - v4.1.0添加以下</trans></p></li>
</ul>

<ol>
<li><p><trans data-src="dialogsProvider.setSize(['sm','lg']) - This will set modal size application wide, but can be overridden using the " data-dst="dialogsprovider。setsize（[ 'sm '，'lg ]）-这将模态尺寸应用广泛，但可以覆盖使用">dialogsprovider。setsize（[ 'sm '，'lg ]）-这将模态尺寸应用广泛，但可以覆盖使用</trans><em><trans data-src="sz" data-dst="深圳">深圳</trans></em><trans data-src=" parameter added to each dialog method call." data-dst="参数添加到每个对话框的调用方法。">参数添加到每个对话框的调用方法。</trans></p></li>
</ol>

<ul>
<li><trans data-src="v4.0.0 - v4.1.0" data-dst="v4.0.0 -软件-最新">v4.0.0 -软件-最新</trans></li>
<li><trans data-src=" Removed " data-dst="删除">删除</trans><em><trans data-src="\$" data-dst="美元">美元</trans></em><trans data-src=" from the " data-dst="从">从</trans><em><trans data-src="\$dialogs" data-dst="\ $对话框">\ $对话框</trans></em><trans data-src=" service as this is reserved for core AngularJS naming.  The service is now just " data-dst="这是保留核心AngularJS命名。服务是现在">这是保留核心AngularJS命名。服务是现在</trans><em><trans data-src="dialogs." data-dst="对话框。">对话框。</trans></em><trans data-src="  Include " data-dst="包括">包括</trans><strong><trans data-src="dialogs.main" data-dst="dialogs.main"><trans data-src="dialogs.main" data-dst="dialogs.main">dialogs.main</trans></trans></strong><trans data-src=" in your application module in order to use the the " data-dst="在你的应用程序要使用的模块">在你的应用程序要使用的模块</trans><em><trans data-src="dialogs" data-dst="对话框">对话框</trans></em><trans data-src=" service" data-dst="服务">服务</trans></li>
<li><trans data-src=" Changed " data-dst="改变">改变</trans><em><trans data-src="dialogs" data-dst="对话框">对话框</trans></em><trans data-src=" service from factory to provider, you can now use " data-dst="从工厂到供应商的服务，现在你可以使用">从工厂到供应商的服务，现在你可以使用</trans><strong><trans data-src="dialogsProvider" data-dst="dialogsprovider">dialogsprovider</trans></strong><trans data-src=" to set various options of the modals that were previously passed as parameters to the dialogs' service methods.

" data-dst="将以前作为参数对话框的服务方法，通过模型的各种选项。">将以前作为参数对话框的服务方法，通过模型的各种选项。</trans><ul>
<li><strong><trans data-src="dialogsProvider.useBackdrop([true,false,'static'])" data-dst="dialogsprovider。usebackdrop（[真实的，虚假的，静态的]）">dialogsprovider。usebackdrop（[真实的，虚假的，静态的]）</trans></strong><trans data-src=" - True or false to use a backdrop for the modal, 'static' to use a backdrop and disallow closing on mouse click of the backdrop." data-dst="-真或假使用的背景模型，静态使用的背景，不允许放在大背景下鼠标点击关闭。">-真或假使用的背景模型，静态使用的背景，不允许放在大背景下鼠标点击关闭。</trans></li>
<li><strong><trans data-src="dialogsProvider.useEscClose([true,false])" data-dst="dialogsprovider。useescclose（[真、假]）">dialogsprovider。useescclose（[真、假]）</trans></strong><trans data-src=" - Whether or not to allow the use of the 'ESC' key to close the modal" data-dst="是否允许“ESC”键使用关闭模态">是否允许“ESC”键使用关闭模态</trans></li>
<li><strong><trans data-src="dialogsProvider.useClass([string])" data-dst="dialogsprovider useclass（[线]）。">dialogsprovider useclass（[线]）。</trans></strong><trans data-src=" - Sets an additional CSS class to the modal window" data-dst="集的模态窗口的一个额外的CSS类">集的模态窗口的一个额外的CSS类</trans></li>
<li><strong><trans data-src="dialogsProvider.useCopy([true,false])" data-dst="dialogsprovider。usecopy（[真、假]）">dialogsprovider。usecopy（[真、假]）</trans></strong><trans data-src=" - Determines whether to use angular.copy or not when passing a data object to the custom dialog service.  Setting this to false will allow the modal to retain the two-way binding with the calling controller - thus changing data in the modal will automatically change it in the calling controller's scope.  The default is setting is true, so if you want the two-way binding you need to set this to false." data-dst="决定是否使用angular.copy或不在将一个数据对象的自定义对话框的服务。设置为false将允许模态保留双向绑定和调用控制器从而改变模态数据会自动改变它在调用控制器的范围。默认的设置是正确的，所以如果你想双向绑定你需要设置为false。">决定是否使用angular.copy或不在将一个数据对象的自定义对话框的服务。设置为false将允许模态保留双向绑定和调用控制器从而改变模态数据会自动改变它在调用控制器的范围。默认的设置是正确的，所以如果你想双向绑定你需要设置为false。</trans></li>
</ul></li>
<li><trans data-src=" Main module is no longer " data-dst="主要模块不再是">主要模块不再是</trans><em><trans data-src="dialogs" data-dst="对话框">对话框</trans></em><trans data-src=" as this would conflict with the new naming of the service.  It is now " data-dst="因为这会与服务的新的命名冲突。这是现在">因为这会与服务的新的命名冲突。这是现在</trans><em><trans data-src="dialogs.main," data-dst="dialogs.main，">dialogs.main，</trans></em><trans data-src=" include that in your application's module definition to use the " data-dst="包括在你的应用程序的模块定义使用">包括在你的应用程序的模块定义使用</trans><em><trans data-src="dialogs" data-dst="对话框">对话框</trans></em><trans data-src=" service." data-dst="服务">服务</trans></li>
<li><p><trans data-src="Added i18n support via " data-dst="通过添加国际化支持">通过添加国际化支持</trans><a href="https://github.com/angular-translate"><trans data-src="Angular-Translate" data-dst="角？">角？</trans></a><trans data-src=", use the " data-dst="，使用">，使用</trans><em><trans data-src="$translateProvider" data-dst="translateprovider美元">translateprovider美元</trans></em><trans data-src=" to set language specific defaults.  Default language is currently " data-dst="设置特定语言的默认值。默认语言是目前">设置特定语言的默认值。默认语言是目前</trans><em><trans data-src="en-US." data-dst="恩我们。">恩我们。</trans></em><trans data-src="  An example is provided in the example folder that will show you how to change the defaults from English to Spanish.  Translations can be set on the following:" data-dst="提供一个例子，例子中的文件夹，将告诉你如何改变默认的西班牙语英语。翻译可以设置如下：">提供一个例子，例子中的文件夹，将告诉你如何改变默认的西班牙语英语。翻译可以设置如下：</trans></p>

<ul>
<li><trans data-src="DIALOGS_ERROR (modal header)" data-dst="dialogs_error（模头）">dialogs_error（模头）</trans></li>
<li><trans data-src="DIALOGS_ERROR_MSG" data-dst="dialogs_error_msg">dialogs_error_msg</trans></li>
<li><trans data-src="DIALOGS_CLOSE (modal button)" data-dst="_（模态对话框关闭按钮）">_（模态对话框关闭按钮）</trans></li>
<li><trans data-src="DIALOGS_PLEASE_WAIT (modal header)" data-dst="dialogs_please_wait（模头）">dialogs_please_wait（模头）</trans></li>
<li><trans data-src="DIALOGS_PLEASE_WAIT_ELIPS (modal header)" data-dst="dialogs_please_wait_elips（模头）">dialogs_please_wait_elips（模头）</trans></li>
<li><trans data-src="DIALOGS_PLEASE_WAIT_MSG" data-dst="dialogs_please_wait_msg">dialogs_please_wait_msg</trans></li>
<li><trans data-src="DIALOGS_PERCENT_COMPLETE (modal message partial)" data-dst="dialogs_percent_complete（模态信息部分）">dialogs_percent_complete（模态信息部分）</trans></li>
<li><trans data-src="DIALOGS_NOTIFICATION (modal header)" data-dst="dialogs_notification（模头）">dialogs_notification（模头）</trans></li>
<li><trans data-src="DIALOGS_NOTIFICATION_MSG" data-dst="对话框_通知_味精">对话框_通知_味精</trans></li>
<li><trans data-src="DIALOGS_CONFIRMATION (modal header)" data-dst="dialogs_confirmation（模头）">dialogs_confirmation（模头）</trans></li>
<li><trans data-src="DIALOGS_CONFIRMATION_MSG" data-dst="确认对话框_ _味精">确认对话框_ _味精</trans></li>
<li><trans data-src="DIALOGS_OK (modal button)" data-dst="dialogs_ok（模态按钮）">dialogs_ok（模态按钮）</trans></li>
<li><trans data-src="DIALOGS_YES (modal button)" data-dst="dialogs_yes（模态按钮）">dialogs_yes（模态按钮）</trans></li>
<li><trans data-src="DIALOGS_NO (modal button)" data-dst="_（非模态对话框按钮）">_（非模态对话框按钮）</trans></li>
</ul></li>
<li><p><trans data-src="v3.0" data-dst="V3.0">V3.0</trans></p></li>
<li><trans data-src=" Added support for Angular UI Bootstrap 0.10.0." data-dst="添加角UI引导0.10.0支持。">添加角UI引导0.10.0支持。</trans></li>
<li><trans data-src=" Added the ability to customize the header on the error and wait dialogs." data-dst="添加自定义标头的错误和等待对话的能力。">添加自定义标头的错误和等待对话的能力。</trans></li>
<li><trans data-src=" Added example files." data-dst="added example文件。">added example文件。</trans></li>
</ul>

<h2><a id="user-content-notes" class="anchor" href="#notes" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Notes" data-dst="笔记">笔记</trans></h2>

<ul>
<li><trans data-src="Angular Translate: v4.0 requires " data-dst="翻译：V4.0需要角">翻译：V4.0需要角</trans><a href="https://github.com/angular-translate"><trans data-src="Angular-Translate" data-dst="角？">角？</trans></a><trans data-src=" be included." data-dst="包括。">包括。</trans></li>
<li><trans data-src="Bootstrap 3: There's a problem with the actual modal being displayed even though it appears in the HTML code to be present.  I found that adding a &quot;display: block&quot; to Bootstrap 3's .modal class solved the problem. " data-dst="引导3：有与实际模态显示即使它出现在HTML代码中存在的问题。我发现，添加一个“显示：块”来引导3的模态类解决问题。">引导3：有与实际模态显示即使它出现在HTML代码中存在的问题。我发现，添加一个“显示：块”来引导3的模态类解决问题。</trans><em><trans data-src="(v3.0 of this service no longer requires this fix)" data-dst="（这个服务V3.0不再需要此修复）">（这个服务V3.0不再需要此修复）</trans></em></li>
<li><trans data-src="It should not rely on including the Bootstrap JS." data-dst="它不应该依靠包括引导JS。">它不应该依靠包括引导JS。</trans></li>
<li><trans data-src="For version 2.0 + of this service module do not forget to include the " data-dst="2版本，该服务模块不要忘了包括">2版本，该服务模块不要忘了包括</trans><em><trans data-src="ngSanitize" data-dst="ngSanitize可">ngSanitize可</trans></em><trans data-src=" Angular module." data-dst="角模块。">角模块。</trans></li>
</ul>

<h2><a id="user-content-contributing" class="anchor" href="#contributing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><trans data-src="Contributing" data-dst="贡献">贡献</trans></h2>

<p><trans data-src="Install Dependencies" data-dst="再进行">再进行</trans></p>

<pre><code><trans data-src="npm install --dev
bower install
" data-dst="新开发
凉亭安装-安装">新开发
凉亭安装-安装</trans></code></pre>

<p><trans data-src="For Browser Testing " data-dst="浏览器测试">浏览器测试</trans><code><trans data-src="gulp watch" data-dst="一看">一看</trans></code></p>

<p><trans data-src="For Unit Testing " data-dst="单元测试">单元测试</trans><code><trans data-src="npm test" data-dst="NPM试验">NPM试验</trans></code></p>

<blockquote>
<p><trans data-src="Written with " data-dst="用">用</trans><a href="https://stackedit.io/"><trans data-src="StackEdit" data-dst="stackedit">stackedit</trans></a><trans data-src="." data-dst="。">。</trans></p>
</blockquote>
</article>

###EN
Angular Dialog Service
======================

>**Please use one of the release versions rather than the Master Branch**.  The Master Branch has untested merges and changes and is a work in progress.  I urge you to always use a release version rather than linking directly to the Master Branch, as the Master Branch may change and may not always be backward compatible.

**v4.x.x + is not backward compatible with versions 1,2,3,3.1  Please refer to the changes section to view what is different in v4.0**

A complete AngularJS service with controllers and templates for generating application modals and dialogs for use with Angular-UI-Bootstrap, Twitter Bootstrap and Font-Awesome.  Supports, i18n, language translations for dialog headers, messages and buttons via angular-translate.

Installation
-----
```bower install angular-dialog-service --save```

Usage
-----

```javascript
var app = angular.module("MyApp", ['dialogs.main']);

app.controller("MyCtrl", function(dialogs){
  // open dialogs here
});
```

```dialogs.error('Error','An unknown error occurred preventing the completion of the requested action.');```

```dialogs.wait('Creating User','Please wait while we attempt to create user "Michael Conroy."<br><br>This should only take a moment.',50);```

```dialogs.notify('Something Happened','Something happened at this point in the application that I wish to let you know about');```

```dialogs.create('url/to/a/template','ctrlrToUse',{data: topass,anotherVar: 'value'},{});```

### API

All Dialogs return a object with property `result` which is a promise `OK/Yes` resolves the promise `Close/Reject/No` rejects the promise

#### dialogs.error, dialogs.notify, dialogs.confirm

```dialogs.error(header, msg, opts)```

```dialogs.notify(header, msg, opts)```

```dialogs.confirm(header, msg, opts)```

| Name | Type | Description |
|---|---|---|
| header | `string` | Dialog header text. |
| msg | `string` | Dialog body text. |
| opts | `object<IDialogOptions>` | Options for the dialog |

#### dialogs.wait

```dialogs.wait(header, msg, progress, opts)```

| Name | Type | Description |
|---|---|---|
| header | `string` | Dialog header text. |
| msg | `string` | Dialog body text. |
| progress | `int` | progress in percentage |
| opts | `object<IDialogOptions>` | Options for the dialog |

#### dialogs.create

```dialogs.create(url, ctrlr, data, opts)```

| Name | Type | Description |
|---|---|---|
| url | `string` | Template Url |
| ctrlr | `string` | Dialog Controller |
| data | `object` | data available as a "data" service in the controller |
| opts | `object<IDialogOptions>` | Options for the dialog with the addition of `copy: false|true` which will copy the data instead of passing reference |

#### IDialogOptions Properties

Note: All properties are optional

| Name | Type | Description |
| --- | --- | --- |
| animation | `boolean` | Set to false to disable animations on new modal/backdrop. Does not toggle animations for modals/backdrops that are already displayed. |
| backdrop | `boolean|string` | controls the presence of a backdrop Allowed values: - true (default) - false (no backdrop) - 'static' backdrop is present but modal window is not closed when clicking outside of the modal window |
| keyboard | `boolean` | indicates whether the dialog should be closable by hitting the ESC key |
| backdropClass | `string` | additional CSS class(es) to be added to a modal backdrop template |
| windowClass | `string` | additional CSS class(es) to be added to a modal window template |
| size | `string` | Optional suffix of modal window class. The value used is appended to the `modal-` class, i.e. a value of `sm` gives `modal-sm`. |

TODO: Add more usage explanations.

Demos
-----
- v4.2 : [Codepen: http://codepen.io/m-e-conroy/pen/rkIqv](http://codepen.io/m-e-conroy/pen/rkIqv)
- v4.2 : [Codepen: with UI-Bootstrap Date Picker directive](http://codepen.io/m-e-conroy/pen/DAxzs)
- v2.0 : [Codepen: http://codepen.io/m-e-conroy/pen/AmBpL](http://codepen.io/m-e-conroy/pen/AmBpL)
- v1.0 : [Codepen: http://codepen.io/m-e-conroy/pen/ALsdF](http://codepen.io/m-e-conroy/pen/ALsdF)

Release Versions
----------------
- v5.2.8 : Patched problem with animations when ngAnimate is available and using Angular-Bootstrap 0.13.0 [(issue #117)](https://github.com/m-e-conroy/angular-dialog-service/issues/117)
- v5.2.5 : Better detection of Font-Awesome if style sheet has been concatentated.  Tested against Angular 1.3.0 & Angular-Bootstrap 0.11.2
- v5.2.2 - v5.2.4 : small bugs fixes
- v5.2.1 : supports Font-Awesome
- v5.2.x : Angular-Translate made optional
- v4.2.0 - v5.x.x+ : supports AngularJS 1.2 +, Angular UI Bootstrap 0.11.0, Bootstrap 3.1 +
- v4.0.0 - v4.1.0 : supports AngularJS 1.2 +, Angular UI Bootstrap 0.10.0, Bootstrap 3 +
- v3.0 : supports AngularJS 1.2 +, Angular UI Bootstrap 0.10.0
- v2.0 : supports AngularJS 1.2 +
- v1.0 : supports AngularJS 1.1.5 and below.


v5.2.8
------
1. Added support for these options: animation & backdropClass - because there is a problem when using Angular-Bootstrap 0.13.0's modal with ngAnimate (Angular v1.4) animation is turned off by default (https://github.com/angular-ui/bootstrap/issues/3633)

v5.2.1
------
1. Added support for Font-Awesome.
2. Added Example/faChk.html to show font-awesome inclusion.

v5.2.0
------
1. Made Angular-Translate dependency optional.
2. Added Example/index2.html to show dialog service working without including Angular-Translate.

v5.1.3
------
1. Bug fixes with regards to v5.1.2 #2 (issue #64)

v5.1.2
------
1. Bug fix for _setOpts (issue #61).
2. Changed the way resolved *header* and *msg* data is passed to the controller, so it would be easier to **decorate** each service if one so desires (issue #60).

v5.1.0
------
1. Fixed Wait dialog template, header should now display a passed parameter header to the wait service.  Prior to this it would always display the default header whether or not a passed header parameter was used or not.
2. Default translations have been removed from the dialogs.main module to their own module, in order to support applications that were already using Angular-Translate and had already defined translation lists for 'en-US.'  Previously including dialogs.main would have overwritten those translation lists supplied elsewhere in an application.  To use the default translations:
	- Include the dialogs-default-translations.min.js file in your HTML file and add 'dialogs.default-translations' to your application's dependency list along with 'dialogs.main'
	- OR If you already had a translation list setup elsewhere in your application just copy the $translationProvider translation list in the dialogs-default-translations module to where-ever it is that you have your list configured

v5.0.0
------
Re-introduction of the [opts] parameter to dialogs methods.  I had many complaints about removing method level options in favor of wholly using the provider instead.

1. dialogs.error(header,msg[,opts])
2. dialogs.wait(header,msg,progress[,opts])
3. dialogs.notify(header,msg[,opts])
4. dialogs.confirm(header,msg[,opts])
5. dialogs.create(url,ctrlr,data[,opts])

v4.2.0
------
Bootstrap 3.1.1 / Angular UI Bootstrap 0.11.0 introduced a size property for dialogs.  This can be controlled via the provider or by the optional *sz* parameter to the dialog methods.

1. dialogs.error(header,msg[,sz])
2. dialogs.wait(header,msg,progress[,sz])
3. dialogs.notify(header,msg[,sz])
4. dialogs.confirm(header,msg[,sz])
5. dialogs.create(url,ctrlr,data[,sz])

v4.0.0 - 4.1.0
--------------
Removed *opts* and *static* parameters from dialog methods in favor of provider settings.  The dialogs service is now longer **$dialogs**, the *\$* has be removed as this is reserved for Angular core services.

1. dialogs.error(header,msg)
2. dialogs.wait(header,msg,progress)
3. dialogs.notify(header,msg)
4. dialogs.confirm(header,msg)
5. dialogs.create(url,ctrlr,data)

v1.0 - v3.1.0
-------------
Predefined dialogs/modals.

1. $dialogs.error(header,msg,[static])
2. $dialogs.wait(header,msg,progess,[static])
3. $dialogs.notify(header,msg,[static])
4. $dialogs.confirm(header,msg,[static])
5. $dialogs.create(url,ctrlr,data,opts)

Dependencies
------------

v5.2.1 +
--------
1. [Font-Awesome](http://fortawesome.github.io/Font-Awesome/) is now an optional CSS inclusion.

v5.2.x +
--------
1. [Angular Translate](https://github.com/angular-translate) is now optional.

v4.2.0 & v5.x.x
---------------
Same as v4.0.0 with the exception of the following:

1. [Angular UI Bootstrap Modal 0.11.0, with templates](http://angular-ui.github.io/bootstrap/#/modal)
2. [Twitter Bootstrap CSS 3.1.x](http://getbootstrap.com)

v4.0.0 - v4.1.0
---------------
1. AngularJS 1.2 +
2. [Angular UI Bootstrap Modal 0.10.0, with templates](http://angular-ui.github.io/bootstrap/#/modal)
3. Twitter Bootstrap CSS 3 + (includes 3.1.1)
4. Angular ngSanitize
5. [Angular Translate](https://github.com/angular-translate)

v3.0
----
1.  AngularJS 1.2 +
2.  Angular UI Bootstrap 0.10.0
3.  Twitter Bootstrap CSS 3.0.3
4.  AngularJS ngSanitize

v2.0 Additional Dependencies
----------------------------
1.  All version 1.0 dependencies.
2.  [Angular JS ngSanitize](http://code.angularjs.org/1.2.1/angular-sanitize.min.js)
	- [ngSanitize](http://docs.angularjs.org/api/ngSanitize) (needed for ng-bind-html)

v1.0
----
1.  [Angular JS](http://www.angularjs.org) (version 1.1.5 and less)
2.  [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/#/modal) (version <= 0.6.0, Non-Bootstrap 3 Branch) with embedded templates.
3.  [Twitter Bootstrap CSS](http://getbootstrap.com) (version 2)


CSS
---
Included a css file that has a .modal class fix for Bootstrap and also has some predefined styles for the various modals described in the service.

**v3.0 css file has the .modal class removed that had been a fix for a Bootstrap 3 display problem.  This has since been rectified by Angular UI and Bootstrap.**

Changes
-------

- v5.2.1
1. If you use Font-Awesome, support is now provided for the icons used in the headers of each predefined dialog.  The dialog service will automatically detect whether you have Font-Awesome loaded or not and use FA icons or the Bootstrap's glyphicons accordingly.  If for some reason the detection doesn't work correctly you can force the use of FA icons by injecting *dialogsProvider* into your module's config function and calling **dialogsProvider.useFontAwesome()**.

- v5.2.x
1. Angular-Translate is now optional, however in order to keep support for Angular-Translate and be able to switch it on and off easily without having to add lines of code to your modules I created a substitute module that is automatically included and used when Angular-Translate is not found.  This subsitute (*translate-substitution.js : translate.sub*) is a provider service (*$translateProvider*) with the same *translations* method as the Angular-Translate provider service does.  The provider service is also named *$translate* and has its own *instant* method.  I did this such that, if in the future you do decide to use Angular-Translate all you will have to do is load the module before the dialog's service is loaded.
2. The *dialogs-default-translations.js* file is also now an optional dependency.

- v5.1.0
1. Separated out the default translations into their own module: **dialogs-default-translations.js**  Include this or the "min" version in your application if you are not already using $translationProvider elsewhere, otherwise just copy the translation list within the module to your translation list for 'en-US.'

- v5.0.0
1. Optionally pass in options object, possible overrides are as follows

   ```
   opts = {
        'keyboard': true or false
        'backdrop': 'static' or true or false
        'size': 'sm' or 'lg' //small or large modal size
        'windowClass': 'dialogs-default' // additional CSS class(es) to be added to a modal window
        'copy': true or false // used only with create custom dialog
    }
    ```

- v4.2.0
1. Supports everything described above in v4.0.0 - v4.1.0 and added the following

2. dialogsProvider.setSize(['sm','lg']) - This will set modal size application wide, but can be overridden using the *sz* parameter added to each dialog method call.

- v4.0.0 - v4.1.0
1.  Removed *\$* from the *\$dialogs* service as this is reserved for core AngularJS naming.  The service is now just *dialogs.*  Include **dialogs.main** in your application module in order to use the the *dialogs* service
2.  Changed *dialogs* service from factory to provider, you can now use **dialogsProvider** to set various options of the modals that were previously passed as parameters to the dialogs' service methods.
	- **dialogsProvider.useBackdrop([true,false,'static'])** - True or false to use a backdrop for the modal, 'static' to use a backdrop and disallow closing on mouse click of the backdrop.
	- **dialogsProvider.useEscClose([true,false])** - Whether or not to allow the use of the 'ESC' key to close the modal
	- **dialogsProvider.useClass([string])** - Sets an additional CSS class to the modal window
	- **dialogsProvider.useCopy([true,false])** - Determines whether to use angular.copy or not when passing a data object to the custom dialog service.  Setting this to false will allow the modal to retain the two-way binding with the calling controller - thus changing data in the modal will automatically change it in the calling controller's scope.  The default is setting is true, so if you want the two-way binding you need to set this to false.
3.  Main module is no longer *dialogs* as this would conflict with the new naming of the service.  It is now *dialogs.main,* include that in your application's module definition to use the *dialogs* service.
4.  Added i18n support via [Angular-Translate](https://github.com/angular-translate), use the *$translateProvider* to set language specific defaults.  Default language is currently *en-US.*  An example is provided in the example folder that will show you how to change the defaults from English to Spanish.  Translations can be set on the following:
	- DIALOGS_ERROR (modal header)
	- DIALOGS_ERROR_MSG
	- DIALOGS_CLOSE (modal button)
	- DIALOGS_PLEASE_WAIT (modal header)
	- DIALOGS_PLEASE_WAIT_ELIPS (modal header)
	- DIALOGS_PLEASE_WAIT_MSG
	- DIALOGS_PERCENT_COMPLETE (modal message partial)
	- DIALOGS_NOTIFICATION (modal header)
	- DIALOGS_NOTIFICATION_MSG
	- DIALOGS_CONFIRMATION (modal header)
	- DIALOGS_CONFIRMATION_MSG
	- DIALOGS_OK (modal button)
	- DIALOGS_YES (modal button)
	- DIALOGS_NO (modal button)

- v3.0
1.  Added support for Angular UI Bootstrap 0.10.0.
2.  Added the ability to customize the header on the error and wait dialogs.
3.  Added example files.

Notes
-----

- Angular Translate: v4.0 requires [Angular-Translate](https://github.com/angular-translate) be included.
- Bootstrap 3: There's a problem with the actual modal being displayed even though it appears in the HTML code to be present.  I found that adding a "display: block" to Bootstrap 3's .modal class solved the problem. *(v3.0 of this service no longer requires this fix)*
- It should not rely on including the Bootstrap JS.
- For version 2.0 + of this service module do not forget to include the *ngSanitize* Angular module.

Contributing
------------

Install Dependencies

```
npm install --dev
bower install
```

For Browser Testing `gulp watch`

For Unit Testing `npm test`



> Written with [StackEdit](https://stackedit.io/).
