IP=$(ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p' | tail -1)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

echo $IP;

# Do not run these when home
if [[ $IP != "192.168.68"* ]]; then
	google-chrome-stable &
	mailspring &
	discord &
	ferdi &
else
	synergyc --name Work 192.168.68.106
fi

gitkraken &
code &

$SCRIPT_DIR/eww/launch
