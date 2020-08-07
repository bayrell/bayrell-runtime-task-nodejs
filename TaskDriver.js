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
Runtime.Task.TaskDriver = function(ctx)
{
	use("Runtime.Core.CoreDriver").apply(this, arguments);
};
Runtime.Task.TaskDriver.prototype = Object.create(use("Runtime.Core.CoreDriver").prototype);
Runtime.Task.TaskDriver.prototype.constructor = Runtime.Task.TaskDriver;
Object.assign(Runtime.Task.TaskDriver.prototype,
{
	/**
	 * Start driver
	 */
	startDriver: async function(ctx)
	{
		if (ctx.entry_point == "Runtime.Task.Entry")
		{
			this.output_cli = true;
		}
	},
	/**
	 * Write
	 */
	write: function(ctx, msg)
	{
		if (!this.output_cli)
		{
			return ;
		}
		process.stdout.write(msg);
	},
	_init: function(ctx)
	{
		this.output_cli = false;
		use("Runtime.Core.CoreDriver").prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof use("Runtime.Task.TaskDriver"))
		{
			this.output_cli = o.output_cli;
		}
		use("Runtime.Core.CoreDriver").prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "output_cli")this.output_cli = v;
		else use("Runtime.Core.CoreDriver").prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "output_cli")return this.output_cli;
		return use("Runtime.Core.CoreDriver").prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Task.TaskDriver";
	},
});
Object.assign(Runtime.Task.TaskDriver, use("Runtime.Core.CoreDriver"));
Object.assign(Runtime.Task.TaskDriver,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Task";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Task.TaskDriver";
	},
	getParentClassName: function()
	{
		return "Runtime.Core.CoreDriver";
	},
	getClassInfo: function(ctx)
	{
		var Collection = use("Runtime.Collection");
		var Dict = use("Runtime.Dict");
		var IntrospectionInfo = use("Runtime.Annotations.IntrospectionInfo");
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Task.TaskDriver",
			"name": "Runtime.Task.TaskDriver",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|2)==2)
		{
			a.push("output_cli");
		}
		return use("Runtime.Collection").from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = use("Runtime.Collection");
		var Dict = use("Runtime.Dict");
		var IntrospectionInfo = use("Runtime.Annotations.IntrospectionInfo");
		if (field_name == "output_cli") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Task.TaskDriver",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
});use.add(Runtime.Task.TaskDriver);
module.exports = Runtime.Task.TaskDriver;