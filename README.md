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
5. restart the terminal

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

## Dash paths
dash points to production-readonly parse
dashd points to dev parse
dashp points to production parse (careful!)

## How to query for Pointers
dash Order p_payment eq 7xyb8SV89j
If you want to compare to pointers, lets say, a order that has the payment of id 7xyb8SV89j

## Shorthand for id eq
If you need to look at a specific object id in a collection, you don't need to specify 'id eq', example:
dash payment 7xyb8SV89j

## Sponsors
I will leave a link to my bitcoin address on demand if anyone wishes to gift some internet coins. 
