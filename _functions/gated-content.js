exports.handler = (event, context, callback) => {
  console.log(context)

  let body = "/"

  if (context.clientContext.identity != undefined) {
    body = "/super-long-url-here/"
  }

  callback(null, {
    statusCode: 200,
    body: body
  });
}