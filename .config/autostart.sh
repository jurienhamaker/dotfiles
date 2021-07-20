IP=$(ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p' | tail -1)

# Do not run these when home
if [[ $IP != "192.168.68"* ]]; then
	google-chrome-stable &
	mailspring &
	discord &
	ferdi &
else
	bspc desktop --focus 10 && quicksynergy &
fi

code &

#bspc desktop --focus Git && gitkraken &
