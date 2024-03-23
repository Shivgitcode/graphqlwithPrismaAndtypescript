import bcrypt from "bcrypt";
const hashing = async (pass) => {
    const hashPass = await bcrypt.hash(pass, 12);
    return hashPass;
};
const isLoggedIn = async (hashpass, pass) => {
    const bool = await bcrypt.compare(pass, hashpass);
    return bool;
};
export { hashing, isLoggedIn };
