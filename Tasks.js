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
Runtime.Task.Tasks = function(ctx)
{
};
Object.assign(Runtime.Task.Tasks.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof use("Runtime.Task.Tasks"))
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Runtime.Task.Tasks";
	},
});
Object.assign(Runtime.Task.Tasks,
{
	/**
	 * Returns task methods
	 */
	getTaskMethods: function(ctx)
	{
		var __v0 = use("Runtime.Vector");
		var items = new __v0(ctx);
		var __v1 = use("Runtime.lib");
		var task_lists = ctx.entities.filter(ctx, __v1.isInstance(ctx, "Runtime.Task.TaskList"));
		for (var i = 0;i < task_lists.count(ctx);i++)
		{
			var task_list = task_lists.item(ctx, i);
			var class_name = task_list.className(ctx);
			var __v2 = use("Runtime.RuntimeUtils");
			var info = __v2.getClassIntrospection(ctx, class_name);
			info.methods.each(ctx, (ctx, arr, method_name) => 
			{
				for (var j = 0;j < arr.count(ctx);j++)
				{
					var item = arr.item(ctx, j);
					var __v3 = use("Runtime.Task.TaskMethod");
					if (item instanceof __v3)
					{
						item = item.copy(ctx, use("Runtime.Dict").from({"class_name":class_name,"method_name":method_name}));
						items.push(ctx, item);
					}
				}
			});
		}
		return items.toCollection(ctx);
	},
	/**
	 * Run cron
	 */
	entities: async function(ctx)
	{
		var output = ctx.getDriver(ctx, "Runtime.Task.TaskDriver");
		output.writeln(ctx, "List entities:");
		var entities = ctx.entities;
		if (ctx.cli_args.get(ctx, 2, "") != "")
		{
			var class_name = ctx.cli_args.get(ctx, 2, "");
			entities = entities.filter(ctx, (ctx, obj) => 
			{
				return obj.getClassName(ctx) == class_name;
			});
		}
		for (var i = 0;i < entities.count(ctx);i++)
		{
			var item = entities.item(ctx, i);
			output.writeln(ctx, i + 1 + use("Runtime.rtl").toStr(") ") + use("Runtime.rtl").toStr(item.logName(ctx)));
		}
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Task";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Task.Tasks";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var __v0 = use("Runtime.Task.TaskList");
		var Collection = use("Runtime.Collection");
		var Dict = use("Runtime.Dict");
		var IntrospectionInfo = use("Runtime.IntrospectionInfo");
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Task.Tasks",
			"name": "Runtime.Task.Tasks",
			"annotations": Collection.from([
				new __v0(ctx, use("Runtime.Dict").from({})),
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
		var IntrospectionInfo = use("Runtime.IntrospectionInfo");
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"entities",
		];
		return use("Runtime.Collection").from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "entities")
		{
			
			var __v0 = use("Runtime.Task.TaskMethod");
			var Collection = use("Runtime.Collection");
			var Dict = use("Runtime.Dict");
			var IntrospectionInfo = use("Runtime.IntrospectionInfo");
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "Runtime.Task.Tasks",
				"name": "entities",
				"annotations": Collection.from([
					new __v0(ctx, use("Runtime.Dict").from({"alias":"entities","description":"Show all entities"})),
				]),
			});
		}
		return null;
	},
});use.add(Runtime.Task.Tasks);
module.exports = Runtime.Task.Tasks;