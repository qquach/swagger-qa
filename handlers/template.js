/**
 * Manage template
 */
module.exports = function(app){
  /**
   * list all template
   */
  app.get("/templates",function(req, res){

  });
  /**
   * get the template by name
   * return the json represent a saved template
   */
  app.get("/templates/:name",function(req,res){

  }),
  /**
   * Add or update a new template
   */
  app.post("/templates",function(req,res){

  });
  /**
   * delete a template by name
   */
  app["delete"]("/templates/:name", function(req,res){

  });
}