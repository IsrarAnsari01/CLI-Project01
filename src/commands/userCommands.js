const { program } = require("commander");
const userRepo = require("../repositories/userRepo");
program.version("1.0.0.0").description("Client Management System");

// Add User Command

program
  .command("add <name> <email> <password> <phoneNumber>")
  .alias("a")
  .description("Add New User")
  .action((name, email, password, phoneNumber) => {
    new userRepo().saveUser({ name, email, password, phoneNumber });
  });

// Find User Command

program
  .command("find <str>")
  .alias("a")
  .description("Find a User")
  .action((str) => {
    new userRepo().singleUser(str);
  });

program.parse(process.argv);
