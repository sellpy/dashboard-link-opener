# Dash_CLI

Lightning speed links delivered straight to your browser!

## Description

The purpose of this cli is to be able to provide shortcuts for you to type a simple command and then be thrown to exactly the place you want in the web browser! 

### Dependencies

* Some patience
* Windows
* If things are not allowed to run due to safety reasons, a visit to https://docs.microsoft.com/sv-se/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

### Installing

1. Git clone git@github.com:sellpy/dashboard-link-opener.git
2. cd dashboard-link-opener
3. npm install
4. npm install -g .
5. restart the terminal

# Command sections
We currently support 3 different shortcut sections:
* Parse dashboard (`dash`, `dashd`, `dashp`)
* Papertrail (`paper`)
* Github (`repo`)

# Parse dashboard

To obtain a parse dashboard link you need to write one of the 3 Parse dashboard commands depending on what environment you want to end up in, and supply a query.

### Paths

* `dash` points to production readonly
* `dashd` points to dev
* `dashp` points to production (careful!)

### Executing program
The formula to write a parse dashboard query is as following:
(note: you can replace `dash` with `dashd` or `dashp`)

`dash $className $field $constraint $compareTo`

`$classname` being the table you want to query.

`$field` being the field you want to compare things to.

`$constraint` being the logical comparator you wish to use.

`$compareTo` being the value you are comparing the field to. 

After completing all the steps in Installing, to use the program you can simply type
1. dash user email eq [insert-your-email-here]
2. press enter

If you need to find an item through its' objectId, the command would ordinarily be like this:

`dash user id eq 1234567890`

You are able to skip the `id eq` part though if you supply a 10 character objectId afterwards:

`dash user 1234567890`

### Valid constraints

* `exists`
* `dne`
* `eq`
* `neq`
* `starts`
* `ends`
* `stringContainsString`
* `unique`
* `before`
* `after`


# Papertrail

To obtain a papertrail link, you only need to supply what section you are interested in. The sections have different short codes, to see all the short codes you can type:

`paper ?`

Then to obtain a papertrail link use the command:

`paper $shortcode`

Example:

`paper lambda` will take you to https://my.papertrailapp.com/groups/5207751/events


# Github

To obtain a github link, you need to supply which repository you are interested in, and optionally a section that you want to look at:

`repo $repository $section`

`$repository` is the url slug for the specific repository. For example to get to https://github.com/sellpy/parsoku-dashboard you use the key `parsoku-dashboard` as `$repository`

`$section` is optional, but here you might suppyl if you want to visit a specific section of a repository, for example to visit the pull request section of a repo, use `pulls` as `$section`. If you're interested in which sections are available, explore github and find the `$section` key in the urls, for example `pulls` in this url: https://github.com/sellpy/parsoku/pulls

Example:

`repo parsoku-serverless commits` will take you to: https://github.com/sellpy/parsoku-serverless/commits

## Sponsors
I will leave a link to my bitcoin address on demand if anyone wishes to gift some internet coins. 
