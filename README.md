# Dash_CLI

Lightning speed links delivered straight to your browser!

## Description

The purpose of this cli is to be able to create parse dashboard links, in the terminal! 

### Dependencies

* Some patience
* Windows
* If things are not allowed to run due to safety reasons, a visit to https://docs.microsoft.com/sv-se/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

### Installing

1. Git clone git@github.com:sellpy/dashboard-link-opener.git
2. cd dashboard-link-opener
3. npm install
4. npm install -g .

### Valid constraints
'exists',
'dne',
'eq',
'neq',
'starts',
'ends',
'stringContainsString',
'unique',
'before',
'after'

### Executing program
The formula to write a parse dashboard query is as following
$className $field $constraint $compareTo

$classname being the table you want to query.
$field being the field you want to compare things to.
$constraint being the logical comparator you wish to use.
$compareTo being the value you are comparing the field to. 

After completing all the steps in Installing, to use the program you can simply type
1. dash user email eq [insert-your-email-here]
2. press enter

## Sponsors
I will leave a link to my bitcoin address on demand if anyone wishes to gift some internet coins. 
