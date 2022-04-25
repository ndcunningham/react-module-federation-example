# React Module Federation Example

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Module Federation

The main purpose of this project is to illustrate module federation using Nx.

Module federation splits your application vertically into separate buildable features. With this approach, a CI such as Nx Cloud can take advantage by distributing these builds across several agents.`

## Structure & Layout

This workspace has:
- A host or shell
- 2 Remote features
- A shared library

<p style="text-align: center;">
<img src="https://i.ibb.co/M90fK5d/Screen-Shot-2022-04-22-at-8-41-28-AM.png">
</p>

Running the shell applications `nx serve landing` will run/build both remotes and also compile the shared lib.

You can also run the remotes by themselves `nx serve make-transfer` or `nx serve accept-transfer` 

If there are no changes and you re-run any of the commands above, the **compilation step** is skipped because Nx will retrieve it from cache.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Do you want even more speed?
To make everything fast for everyone, including your CI, we recommend adding **Nx Cloud**.

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
