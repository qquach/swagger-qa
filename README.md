swagger-qa
============

Automation test swagger api

Features of automation test for swagger api.

1. Should be able to run with any swagger api. If a web service, could be either rest, soap or traditional key value pair
can also be used as well by providing a mapping layer. This mapping layer could be use as a revert proxy for server or as an adapter for swagger-test.

2. Controller (take the concept from jmeter) this provide some control flow for testing. Some could be provides: random controller:
sample will be call random. Simple controller, execute top down. while controller, switch controller, if else controller.

3. Sample requests, it should be generated automatically when provide the swagger specification of the web service.

4. Request Configuration: It could take csv, json, xml, ini as subsitute data for each request.

5. Response Parser: user can defined how to parse response for assertion, sending to next request.

6. Assertion: simple assert true false, object equal, regular expression

7. Result: accumunate results for different types: summary, details

8. It should be able to run with the web ui or as command line for integration with continuous integration system like Jenkins

Design

Concept
  1. Users will provide the swagger definition from a url.
  2. The definition will be download, parse and generate a request template.
  3. Request template will be saved on server side as template files in json format.
  4. Request template can be load back from server, copy, rename...
  5. Grouping template: be default all template save into the default group. Users has option to create different group.
  6. One approach to make easier for reading. template name will be map to file name and it should be unique for each group.
    a. Group will be map to a directory on server.
    b. Since group and template name are map to actual file, it should be naming uniquely.
  7. Another approach is to create logically mapping guid file name with template name and grouping template logically with a settings.
  This is a good approach if an only if users don't want to look at what will store on server. This could be desirable because it provide
  more flexible to name template and group, it also easier to do grouping template. Since it only logically, no file will be move around.
  And also allow one template be referenced in multiple group.
  8. One of a goal is to keep the mapping simple so it can be store in on json file and still able to read.

For UI Design:
  1. It will be use client side render jFramework.
  2. The web server use express to server static files and receive request to be sent out.

Request sending:
  1. Request details will be generated on client side, which can be use for client submission as an option, it will be send to server
  and save as request template. It then being process to construct real requests and to be sent out with "request" module and "httpntlm" as as option.
  2. It could be send directly from client side with jquery ajax or form submission. This is an optional feature and will be added later
  3. For command line, request template need to be created first in order to run from command line.

Code Structure:
  js: contain client side scripts for render the ui, which will have jquery, jFramework...
  lib: library mainly used on server side to handle business logic
  templates: default folder location to store all created request templates.
  resources: location to store addition files as input data of requests. File names strictly used to refer to resources. Files could be upload via UI or copy directly into the folder.
  test: unit test for server side code
  ui: template for render ui on client side. Be clear, don't confuse the ui templates and the request templates.
  swagger_qa is the entry point which either start it as command line or web ui.