'use strict';

var services = angular.module('dabbble.services', []);

services.factory('dribbble', function ($http) {
	function load(path, params) {
		params = params || {};
		params.callback = "JSON_CALLBACK";
		console.log('Path :'+path);//  /shots/1958712
		return $http.jsonp('http://api.dribbble.com'+ path, {params: params});
	}
	return {
		list: function (type, params) {
			return load("/shots/" + type, params);
		},
		shot: function (id) {
			return load("/shots/" + id);
		}
	}
})



services.factory('flickr', function ($http) {
	console.log('Path :');//  /shots/1958712
	function load(path, params) {
		params = params || {};
		params.callback = "JSON_CALLBACK";
		console.log('Path :'+path);//  /shots/1958712
		return $http.jsonp('js/api.json'+ path, {params: params});
		//return $http.get('js/api.json').success(function(result){var data = result.})
	}
	return {
		list: function (type, params) {
			return load("/projects/" + type, params);
		},
		shot: function (id) {
			return load("/projects/" + id);
		}
	}
})