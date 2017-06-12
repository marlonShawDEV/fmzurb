
# Scripts

This page provides details on existing JavaScript functions and variables that are part of the responsive template.



# Global Variables and Functions

There are two globally-scoped variables that are set in fmGlobals.js and one globally scoped function set in appCorp.js.

| Variable Name | Value or Description |
|---------------|----------------------|
| QueryParam    | a JavaScript object consisting of all key=value pairs from the current page's query string |
| FM            | a JavaScript object designed to avoid collisions with other objects or variables in the global namespace |
| getWidth()    | function that returns the current width of the viewport  |

## QueryParam Usage

Test to see if string exists in query.

```javascript
//assume that page url is something like yogurt.html?type=greek&flavor=strawberry
if(QueryParam['type']){
  console.log("type is defined");
}
```

Set a variable equal to the value of a query string item. 

```javascript
//assume that page url is something like yogurt.html?type=greek&flavor=strawberry
var flavor = QueryParam['flavor'] || '';
if(flavor !== '') { 
  console.log("The flavor is " + flavor); 
}
```

---

## FM Usage

All global variables and functions are defined as properties of FM.form. If you are writing other JavaScript plugins, you can utilize additional namespacing parallel to FM.form.



# FM.form 

FM.form's properties store numerous variables and functions.
 
| Name               | Description     | Value                                |
|--------------------|-----------------|--------------------------------------|
| FM.form.domain     | string          | hard-coded to 'http://www.freddiemac.com' |	
| FM.form.protocol   | string          | returns location.protocol: https |
| FM.form.hostname   | string          | returns location.hostname: extcstage.fhlmc.com (no port)|
| FM.form.pathname   | string          | returns location.pathname of current page's URL: /path/file.html |
| FM.form.hash       | string          | returns the location.hash, which is part of the URL after a hash: #part2  |
| FM.form.href       | string          | returns location.href, which is the entire URL of the current page |
| FM.form.querystr   | string          | returns location.search, which is the query string: ?f=try&g=it |
| FM.form.referrer   | string          | returns document.referrer, if available |
| FM.form.fmTimer    | string          | initialized with value of 0. Used when setting a timer. |
| FM.form.pathElements | array         | returns array of path sections, such as 'singlefamily', 'factsheets', 'service' |
| FM.form.QueryPairs | array           | array of all a=b pairs in the query string |
| FM.form.setCookie  | function        | sets a cookie. no return value |
| FM.form.getCookie  | function        | returns value of requested cookie, or empty string |
| FM.form.deleteCookie | function      | deletes a cookie. no return value |
| FM.form.limitText  | function        | limits characters in a text field. no return value |
| FM.form.trimWhiteSpace | function    | returns string trimmed of leading and trailing whitespace |
| FM.form.forceGlobalLinks | function  | converts a local url to a prod url, returns modified url |
| FM.form.useOmni    | function        | returns false if url omniture code not defined, or if page is loaded in TeamSite or localhost; otherwise returns true. |
| FM.form.setTimer   | function        | clears timer and sets it to run a routine after a delay. no return value |
| FM.form.resetReveal | function       | clears `.is-reveal-open` class once reveals are closed (fix for Foundation Issue causing loss of scroll bar) |
| FM.form.offsetReveal | function      | shifts top location of modals. no return value. |
| FM.form.omniNavLink | function       | routine that tracks and names navigation clicks. no return value. |

## FM.form.setCookie

Syntax:
- FM.form.setCookie(cookieName, cookieValue)
- FM.form.setCookie(cookieName, cookieValue, daysTilExpired)
- FM.form.setCookie(cookieName, cookieValue, daysTilExpired, sitePath)

| Parameter      | Value          |
|----------------|----------------|
| cookieName     | Required. The name of the cookie you want to set. |
| cookieValue    | Required. The value of the cookie you want to set.|
| daysTilExpired | Optional. Default value is 0.5 (half a day)       |
| cookiePath     | Optional. Default value is "/" (sidewide cookie)  |

Example:

```
// set a cookie named 'yogurt' to a value of 'lowfat'
FM.form.setCookie('yogurt','lowfat'); 

// same cookie name/value, set to expire in 3 hours (1/8 of a day)
FM.form.setCookie('yogurt','lowfat', 0.125); 

// same cookie name/value, set to expire in 7 days, limit path to /singlefamily
FM.form.setCookie('yogurt','lowfat', 7, '/singlefamily'); 
```

---

## FM.form.getCookie

Syntax:
- FM.form.getCookie(cookieName)

| Parameter      | Value          |
|----------------|----------------|
| cookieName     | Required. The name of the cookie you want to set  Will return empty string if cookie is not set.|

Example:

```
// read a cookie named 'yogurt' and log value
var myVar = FM.form.getCookie('yogurt');
console.log('yogurt cookie was set to "' + myVar + '".');
```

---

## FM.form.deleteCookie

Syntax:
- FM.form.deleteCookie(cookieName)

| Parameter      | Value          |
|----------------|----------------|
| cookieName     | Required. The name of the cookie you want to delete.|
| cookiePath     | Optional. Default value is "/" (sidewide cookie)    |

Example:

```
// delete a cookie named 'yogurt'
  FM.form.deleteCookie('yogurt'); 

// delete a cookie named 'yogurt' from path of /singlefamily
  FM.form.deleteCookie('yogurt','/singlefamily'); 
```

---
