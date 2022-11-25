"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Registrar un usuario
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    //Guardando un nuevo usuario
    const user = new user_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = yield user.encryptPassword(user.password);
    // console.log(user);
    const saveUser = yield user.save();
    // console.log(saveUser);
    //Creando token
    // const token:string = jwt.sign({ _id: saveUser._id}, process.env.TOKEN_SECRET || 'TokenTest1254'); //49 minutos
    const token = jsonwebtoken_1.default.sign({ _id: saveUser._id }, `${process.env.TOKEN_SECRET}`);
    // res.json(token); //TRAE EL TOKEN UNICAMENTE
    res.header('auth-token', token).json(saveUser); // TRAE EL TOKEN PERO LO GUARDA EN LOS HEADERS
});
exports.signup = signup;
// Hacer un login
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json('Email o password no encontrados');
    }
    const correctPassword = yield user.validatePassword(req.body.password);
    // res.send('signin');
    if (!correctPassword) {
        return res.status(400).json('Password incorrecto');
    }
    // const token:string = jwt.sign({_id: user._id},process.env.TOKEN_SECRET || 'TokenTest1254',{
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, `${process.env.TOKEN_SECRET}`, {
        expiresIn: 60 * 60 * 24
    });
    res.header('auth-token', token).json(user);
});
exports.signin = signin;
// Indicarle los datos de ese perfil
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.header('auth-token')); //Revisar 1h 04 min
    const user = yield user_1.default.findById(req.userId);
    if (!user) {
        return res.status(404).json('Usuario no encontrado');
        res.json(user);
    }
});
exports.profile = profile;
//# sourceMappingURL=authController.js.map