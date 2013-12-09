# Express Resource Example
Actions are then mapped as follows (by default), providing `req.params.image` which contains the substring where ":image" is shown below:

    GET     /images              ->  index
    GET     /images/new          ->  new
    POST    /images              ->  create
    GET     /images/:image       ->  show
    GET     /images/:image/edit  ->  edit
    PUT     /images/:image       ->  update
    DELETE  /images/:image       ->  destroy


You can also use custom endpoints.
