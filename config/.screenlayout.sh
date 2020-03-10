#!/bin/sh
CONNECTED=$(xrandr | grep " connected " | awk '{ print$1 }');
RESOLUTION=3840x2160

LAPTOP=eDP-1-1
MONITOR=DP-1-1

if [[ $CONNECTED == *"$MONITOR"* ]]; then
    xrandr --output $LAPTOP --mode $RESOLUTION --pos 3840x0 --output $MONITOR --primary --mode $RESOLUTION --pos 0x0
else
    xrandr --output $LAPTOP --mode $RESOLUTION --pos 3840x0 --primary --output $MONITOR --off
fi
