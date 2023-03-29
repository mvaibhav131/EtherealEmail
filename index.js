const nodemailer=require("nodemailer");
const hbs=require("handlebars");

const transport=nodemailer.createTransport({
    host:"smtp.ethereal.email",
    secure:false,
    port:587, 
    //465:SSL/Gmail, 587:TLS   80:http  443:https
    auth:{
        user:"cory.barrows@ethereal.email",
        pass:"Cp1P4sGeFFDcErkbmw"
    }
});

//read file:email.hbs
const content=`<div>
<h1>Hello,{{name}}</h1>
<p>Thank You for Signin</p>
<h3>Your age is :{{age}}</h3>
</div>`;
 
//template engines
const template=hbs.compile(content);

transport.sendMail({
    from:"from@vaibhav.com",
    to:"to@vaibhav.com",
    subject:"Hello Vaibhav, Welcome to node mailer",
    text:"hello vaibhav",
    html:template({name:"Vaibhav",age:34}),
}).then(console.log).catch(console.error)
