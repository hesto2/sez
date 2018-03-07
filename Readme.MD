# SEZ
Small package that you can use for a joke on someone's computer (only OSX for now)

`npm install -g sez`, then run `sez <interval in minutes> <sentence you want it to say> &` (ampersand to run it as a background task)

To cancel it, just run `sudo killall -9 node`, or look it up using `ps ax | grep node` and kill it manually.

## Example
Sample Command:

`sez 15 This sentence will be spoken every 15 minutes`

