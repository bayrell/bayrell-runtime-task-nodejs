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
Runtime.Task.TaskMethod = function(ctx)
{
	use("Runtime.BaseStruct").apply(this, arguments);
};
Runtime.Task.TaskMethod.prototype = Object.create(use("Runtime.BaseStruct").prototype);
Runtime.Task.TaskMethod.prototype.constructor = Runtime.Task.TaskMethod;
Object.assign(Runtime.Task.TaskMethod.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.class_name = "";
		this.method_name = "";
		this.alias = "";
		this.description = "";
		use("Runtime.BaseStruct").prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof use("Runtime.Task.TaskMethod"))
		{
			this.class_name = o.class_name;
			this.method_name = o.method_name;
			this.alias = o.alias;
			this.description = o.description;
		}
		use("Runtime.BaseStruct").prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "class_name")this.class_name = v;
		else if (k == "method_name")this.method_name = v;
		else if (k == "alias")this.alias = v;
		else if (k == "description")this.description = v;
		else use("Runtime.BaseStruct").prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "class_name")return this.class_name;
		else if (k == "method_name")return this.method_name;
		else if (k == "alias")return this.alias;
		else if (k == "description")return this.description;
		return use("Runtime.BaseStruct").prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Task.TaskMethod";
	},
});
Object.assign(Runtime.Task.TaskMethod, use("Runtime.BaseStruct"));
Object.assign(Runtime.Task.TaskMethod,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Task";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Task.TaskMethod";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = use("Runtime.Collection");
		var Dict = use("Runtime.Dict");
		var IntrospectionInfo = use("Runtime.IntrospectionInfo");
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Task.TaskMethod",
			"name": "Runtime.Task.TaskMethod",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("class_name");
			a.push("method_name");
			a.push("alias");
			a.push("description");
		}
		return use("Runtime.Collection").from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = use("Runtime.Collection");
		var Dict = use("Runtime.Dict");
		var IntrospectionInfo = use("Runtime.IntrospectionInfo");
		if (field_name == "class_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Task.TaskMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "method_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Task.TaskMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "alias") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Task.TaskMethod",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "description") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Task.TaskMethod",
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
});use.add(Runtime.Task.TaskMethod);
module.exports = Runtime.Task.TaskMethod;