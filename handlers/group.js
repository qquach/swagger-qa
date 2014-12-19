/**
 * New node file
 */
module.exports = function(app){
  /**
   * list all template
   */
  app.get("/groups",function(req, res){

  });
  /**
   * get all templates belong to a group
   * return the json represent a saved template
   */
  app.get("/groups/:name",function(req,res){

  }),
  /**
   * Add or update a new group
   */
  app.post("/groups",function(req,res){

  });
  /**
   * delete a group by name
   */
  app["delete"]("/groups/:name", function(req,res){

  });
  /**
   * adding one or more templates into a group
   */
  app.put("/groups/:gName",function(req,res){

  });
  /**
   * remove a template from a group
   */
  app["delete"]("/groups/:gName/templates/:tName",function(req,res){

  });
}