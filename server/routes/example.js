export default function(server) {
	

  server.path('/home/jialiang/Desktop/use_this/docx2pdf2json2es/pdf');
  server.route({
    path: '/api/test/example',
    method: 'GET',
    handler() {
      return { time: new Date().toISOString() };
    },
  });
  
  server.route({
    path: '/api/test/getDocument',
    method: 'GET',
    handler: function(request, response) {
		
		//must install @hapi/inert
		return response.file('./3.pdf')
      // return { time: new Date().toISOString() };
    },
  });

}
