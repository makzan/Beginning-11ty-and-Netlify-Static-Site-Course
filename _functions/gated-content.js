exports.handler = (event, context, callback) => {

  console.log(context);

  let user = context.clientContext.user;

  let body = "/"

  if (user != undefined) {
    body = "/super-long-url-here/"
  }

  callback(null, {
    statusCode: 200,
    body: body
  });
}