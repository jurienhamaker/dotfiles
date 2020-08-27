#!/bin/sh
xrandr --setprovideroutputsource modesetting NVIDIA-0
xrandr --auto
xrandr --dpi 154


CONNECTED=$(xrandr | grep " connected " | awk '{ print$1 }');
RESOLUTION=3840x2160

LAPTOP=eDP-1-1
MONITOR=DP-1-2

if [[ $CONNECTED == *"$MONITOR"* ]]; then
	echo "With monitor?"
    xrandr --output $LAPTOP --mode $RESOLUTION --pos 0x0 --output $MONITOR --primary --mode $RESOLUTION --pos 3840x0
else
	echo "Without monitor"
    xrandr --output $LAPTOP --mode $RESOLUTION --pos 0x0 --primary --output $MONITOR --off
fi
