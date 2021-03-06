var keystone = require('keystone');
var Page = keystone.list('Page');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
    var slug = req.params.slug;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.mainSite = true;
    locals.section = slug;

    view.on('get', function(next) {
        Page.model.findOne({ 'slug': slug }, '', function (err, page) {
            if (page) {
                locals.title = page.title;
                locals.pageTitle = page.title;
                locals.content = page.content;
            } else {
                locals.title = "Page not found";
                locals.pageTitle = "Page not found";
                res.status(404);
            }

            next(err);
        })
    });
	
	// Render the view
	view.render('about');
	
};
