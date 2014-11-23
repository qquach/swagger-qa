swagger-test
============

Automation test swagger api

Concept to automation test with swagger api.

1. Should be able to run with any swagger api. If a web service, could be either rest, soap or traditional key value pair can also be used as well by providing a mapping layer. This mapping layer could be use as a revert proxy for server or as an adapter for swagger-test.

2. Controller (take the concept from jmeter) this provide some control flow for testing. Some could be provides: random controller: sample will be call random. Simple controller, execute top down. while controller, switch controller, if else controller.

3. Sample requests, it should be generated automatically when provide the swagger specification of the web service.

4. Request Configuration: It could take csv, json, xml, ini as subsitute data for each request.

5. Response Parser: user can defined how to parse response for assertion, sending to next request.

6. Assertion: simple assert true false, object equal, regular expression

7. Result: accumunate results for different types: summary, details
