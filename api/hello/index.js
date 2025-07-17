module.exports = async function (context, req) {
context.res = {
status: 200,
headers: { "Content-Type": "application/json" },
body: { message: "Hello from Azure API!" },
};
};
Create function.json
{
"bindings": [
{
"authLevel": "anonymous",
"type": "httpTrigger",
"direction": "in",
"name": "req",
"methods": ["get"]
},
{
"type": "http",
"direction": "out",
"name": "res"
}
]
}