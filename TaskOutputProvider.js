"use strict;"
var use = require('bayrell').use;
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Task == 'undefined') Runtime.Task = {};
Runtime.Task.TaskOutputProvider = function(ctx)
{
	use("Runtime.Core.CoreProvider").apply(this, arguments);
};
Runtime.Task.TaskOutputProvider.prototype = Object.create(use("Runtime.Core.CoreProvider").prototype);
Runtime.Task.TaskOutputProvider.prototype.constructor = Runtime.Task.TaskOutputProvider;
Object.assign(Runtime.Task.TaskOutputProvider.prototype,
{
	writeln: function(ctx, msg)
	{
		var driver = ctx.getDriver(ctx, "Runtime.Task.TaskDriver");
		driver.write(ctx, msg + use("Runtime.rtl").toStr("\n"));
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof use("Runtime.Task.TaskOutputProvider"))
		{
		}
		use("Runtime.Core.CoreProvider").prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		use("Runtime.Core.CoreProvider").prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return use("Runtime.Core.CoreProvider").prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Task.TaskOutputProvider";
	},
});
Object.assign(Runtime.Task.TaskOutputProvider, use("Runtime.Core.CoreProvider"));
Object.assign(Runtime.Task.TaskOutputProvider,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Task";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Task.TaskOutputProvider";
	},
	getParentClassName: function()
	{
		return "Runtime.Core.CoreProvider";
	},
	getClassInfo: function(ctx)
	{
		var Collection = use("Runtime.Collection");
		var Dict = use("Runtime.Dict");
		var IntrospectionInfo = use("Runtime.Annotations.IntrospectionInfo");
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Task.TaskOutputProvider",
			"name": "Runtime.Task.TaskOutputProvider",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return use("Runtime.Collection").from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = use("Runtime.Collection");
		var Dict = use("Runtime.Dict");
		var IntrospectionInfo = use("Runtime.Annotations.IntrospectionInfo");
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return use("Runtime.Collection").from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});use.add(Runtime.Task.TaskOutputProvider);
module.exports = Runtime.Task.TaskOutputProvider;