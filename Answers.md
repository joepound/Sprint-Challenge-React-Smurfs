# 1. Explain the differences between `client-side routing` and `server-side routing`.

A point-by-point comparison:

**Server-side routing** 

* Loading a page involves requesting for an entire page, and only the content related to that page (even if that includes content repeated on other pages)

* Results in a full page refresh, with the accompanying loading time for rendering every new page

* Has been the standard for much longer and is thus more optimized for search engines

**Client-side routing**

* 'Loading' a page is not actually loading a new page; rather, it is simply the result of loading the whole web site and then determining what to display using instructions from a script

* Only refreshes the parts of the page that change, resulting in smoother transitions through content (though first-time loading may take much longer depending on scale)

* Still friendly with search engines, but not as progressive and efficient as server-side routing (by virtue of being newer)

# 2.  What does HTTP stand for?

HTTP stands for **Hypertext Transfer Protocol**. It is a network application protocol that determines the instructions and data (and their formatting) to be passed to a particular machine.

# 3.  What does CRUD stand for?

## Create

This refers to the operations related to **adding new entries** to a collection of data. For aactual implementation, this may include various operations to _format the new entry_ and/or _determine what the values of that new piece of data should be_, among others.

## Retrieve

This refers to the operations related to **retrieving and (usually) displaying (or using in some other way) any number of entries** out of a collection of data. For actual implementation, this may include, among others, the _formatting, styling, and determining criteria for entries to meet in order to be included among the items to displayed_.

## Update

This refers to the operations related to **applying changes to any number of existing entries** out of a collection of data. For actual implementation, this may include, among others, _determining the criteria for entries to be eligible for the current update operation_ and _determining the new values of the entries to be updated_.

## Delete

This refers to the operations related to **removing any number of entries from a collection of data**. For actual implementation, this may include _determining various conditions for an entry to be deleted_ and _ensuring that the deleted entries are removed from view (i.e., that they won't remain visible in the UI after deletion)_, among others.

# 4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

HTTP methods are implemented in various programming languages/tools, generally with names (like with methods in `axios`) or specific arguments that correspond to the following request types:

* **Create:** `POST`
* **Retrieve:** `GET`
* **Update:** `PUT`
* **DeleteL** `DELETE`

# 5.  Mention three tools we can use to make AJAX requests

## `fetch`

An API with a globally available (usable throughout pure Javascript without dependencies, albeit not yet supported on all browsers) method called `fetch()`. 

## `axios`

The most popular JS library for making requests that are based on data promises.

## `async/await`

A new way to write code based on asynchronous requests by working with promises inside `async` functions and then using the `await` keyword to wait until the promise is resolved (when some form of response has been returned).