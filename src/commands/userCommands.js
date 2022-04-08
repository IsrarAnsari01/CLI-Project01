#!/usr/bin/env node
const { program } = require("commander");
const userPromts = require("./promts");
const { prompt } = require("inquirer");

const userRepo = require("../repositories/userRepo");
program.version("1.0.0.0").description("Client Management System");

// Add User Command

program
  .command("add")
  .alias("a")
  .description("Add New User")
  .action(() => {
    prompt(userPromts.userPromt.questionForUser).then((ans) => {
      new userRepo().saveUser(ans);
    });
  });

// FindOne User Command

program
  .command("find <str>")
  .alias("f")
  .description("Find a User")
  .action((str) => {
    new userRepo().singleUser(str);
  });

// findAll User Command

program
  .command("find-all")
  .alias("fl")
  .description("Find All User")
  .action((str) => {
    new userRepo().findAll();
  });

// Update a user

program
  .command("update-user <_id>")
  .alias("u")
  .description("Update a User Information")
  .action((_id) => {
    prompt(userPromts.userPromt.questionForUser).then((ans) => {
      new userRepo().updateUser(_id, ans);
    });
  });

// Delete User
program
  .command("delete-user <_id>")
  .alias("d")
  .description("Update a User Information")
  .action((_id) => {
    new userRepo().deleteUser(_id);
  });

program.parse(process.argv);
