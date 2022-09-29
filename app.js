import express from 'express';
import { router } from "./router.js";
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const port = 8080;
app.use(bodyParser.json())
app.use(cors())


let contactsList = [
    { old_password: '12345Aa122@!!(' },
    { newPassword: 'ayala' },
    { token: 1233 }
];

let books = [
    { old_password: '12345Aa122@!!(' },
    { newPassword: 'ayala' },
    { token: 1233 }
];

let username = "miriamp@one1.co.il"
let password = "123"

// app.use('/api', router)
app.use('/ForgotPassword',
    (req, res) => {
        console.log("req", req.body.username);
        return res.status(200).json({ status: "ok" ,message: 'New password sent successfully'});
    }); 
    app.use('/ApiRegistrationEmail',
    (req, res) => {
        console.log("req", req.body.username);
        return res.status(200).json({ status: "ok" ,message: 'New password sent successfully'});
    }); 
app.use('/UpdatePassword',
    (req, res) => {
        console.log("mimi");

        // var error = { message: "old_password does not exists", data: { ststus: 400 } } //בודק אם הסיסמא הישנה היתה קיימת אם לא מחזיר א
        // var error = { message: "The password has been used before", data: { ststus: 400 }//הסיסימא היתה בשימוש בעברF
        console.log("old_Password", req.body.old_password);
        console.log("contactsList[0].old_password", contactsList[0].old_password);
        var s = '' + req.body.newPassword;
        console.log("newPassword", s);
        console.log("contactsList[1].newPassword", contactsList[1].newPassword);

        if (contactsList[1].newPassword === s) {

            console.log("400 new");

            return res.status(400).json({ status: "fail", message: "The password has been used before" });
        }
        if (contactsList[0].old_password == req.body.old_password) {
            console.log("200");
            return res.status(200).json({ status: "ok", message: 'Password update successful' });
        }
        else if (!(contactsList[0].old_password == req.body.old_password)) {
            console.log("400 old");
            return res.status(400).json({ status: "fail", message: "old_password does not exists" });
        }
    });

app.use('/Loginservice',
    (req, res) => {
        if (req.query.service) {
            if ((contactsList[0].old_password == req.body.password) && (contactsList[1].newPassword == req.body.username)) {
                console.log("200");
                return res.status(200).json({ status: "ok", message: 'Password update successful', payload: { token: "ott1233" } });
            }
            else {
                console.log("400 old");
                return res.status(400).json({ status: "fail", message: "old_password does not exists" });
            }
            // console.log("service", req.query.service);
            // console.log("paasword", req.body.paasword);
            // console.log("username", req.body.username);
            // console.log("req.body.service", req.body.service = req.query.service);
            // //api login
            // console.log("send otttoken ott1233");
            // return res.status(200).json({ status: "ok", payload: { token: "ott1233" } });

        }
        else {
            console.log("Notservice");
            console.log("paasword", req.body.paasword);
            console.log("username", req.body.username);
            //api login no service
            console.log("send token 1233");
            return res.status(200).json({ status: "ok", payload: { token: "1233" } });

        }
    });

app.use('/Authenticate',
    (req, res) => {
        console.log("Authenticate get ottToken", req.body.otttoken);
        console.log("Authenticate send token", 1233);

        // return res.status(401).json({ status: "ok", payload: { token: "1233" } });

        return res.status(200).json({ status: "ok", payload: { token: "1233" } });
    });

app.use('/login',

    (req, res) => {
        console.log("login get username", req.body.username);
        console.log("login get password", req.body.password);
        console.log(" username", username);
        console.log("password", password);
        // if (req.body.username === "miriamp@one1.co.il" && req.body.password === 123)// && password === req.body.paasword
        return res.status(200).json({ status: "ok" });
        // return res.status(403).json({ status: "faile" });

        // else {
        //     return res.status(403).json({ status: "faile" });

        // }
    });

app.use('/SignOut',
    (req, res) => {
        console.log("TOKEN", req.body.token);

        return res.status(200).json({ status: "ok" });

        // return res.status(200).json({ status: "ok", payload: { token: "1233" } });
    });



app.use('/AccountsApiAuth',
    (req, res) => {
        console.log("send", contactsList[2].token);

        var s = '' + contactsList[2].token;
        console.log("contactsList[2].token", s);

        if (s === req.body.token) {
            return res.status(200).json({ status: "ok", payload: { username: contactsList[1].newPassword, password: contactsList[0].old_password } });
            // return res.status(403).json({ status: "fail" });

        }
        else {
            return res.status(200).json({ status: "ok", payload: { username: contactsList[1].newPassword, password: contactsList[0].old_password } });

            // return res.status(403).json({ status: "fail" });

        }
        // return res.status(200).json({ status: "ok", payload: { token: "1233" } });
    });
// if (contactsList[1].newPassword ===s) {

//     console.log("400 new");

//     return res.status(400).json({ status: "fail", message: "The password has been used before" });
// }
// if (contactsList[0].old_password == req.body.old_password) {
//     console.log("200");
//     return res.status(200).json({ status: "ok", message: 'Password update successful' });
// }
// else if (!(contactsList[0].old_password == req.body.old_password)) {
//     console.log("400 old");
//     return res.status(400).json({ status: "fail", message: "old_password does not exists" });
// }
// });
app.use('/caseType',
    (req, res) => {
        console.log("mimi")
        // console.log("TOKEN", req.headers.Authorization.token);
        return res.status(200).json(
            {
                status: "ok", payload: {
                    items: [

                        { CASE_TYPE: "7", FCASE_TYPE_NAME: "הדרכות ביוזמת לקוח" },
                        { CASE_TYPE: "8", FCASE_TYPE_NAME: " לקוח" },
                        { CASE_TYPE: "9", FCASE_TYPE_NAME: "הדרכות ביוזמת " },]
                }
                // { username: contactsList[1].newPassword, password: contactsList[0].old_password }
            }
        );
        // return res.status(403).json({ status: "fail" });

    });
app.use('/contacts',
    (req, res) => {
        console.log("mimi")
        // console.log("TOKEN", req.headers.Authorization.token);

        return res.status(200).json({
            status: "ok", payload: {
                items: [
                    { contact_person_name: "miriam", contact_person_code: "123" },
                    { contact_person_name: "mimi", contact_person_code: "333" },
                    { contact_person_name: "debby", contact_person_code: "2566" }
                ]
            }

        });



        // return res.status(200).json({ status: "ok", payload: { token: "1233" } });
    });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
