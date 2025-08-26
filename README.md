# Giselle Docs

### Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview the documentation changes locally. To install, use the following command

```
npm i -g mint
```

Run the following command at the root of your documentation (where docs.json is)

```
mint dev
```

### Publishing Changes

Install our Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to production automatically after pushing to the default branch. Find the link to install on your dashboard. 

#### Upgrading from mint.json

If you have an existing `mint.json` file, upgrade to the new `docs.json` format:

1. Update CLI: `mint update`
2. Run upgrade command: `mint upgrade`
3. Review the generated `docs.json` file
4. Delete the old `mint.json` file after verification

#### Troubleshooting

- Mintlify dev isn't running - Run `mint update` to update dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `docs.json`
