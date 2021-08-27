#!/bin/bash

#xrandr --dpi 152
#xrandr --auto

#Nvidia settings
#xrandr --setprovideroutputsource modesetting NVIDIA-0

#xrandr --dpi 152
#xrandr --auto 

# $MONITOR & $LAPTOP are found in /etc/environment

#AVAILABLE=$(xrandr --listmonitors | awk '{ print$4 }');
CONNECTED=$(xrandr | grep " connected " | awk '{ print$1 }');
RESOLUTION=2560x1440
OFFSET=2560

#echo $LAPTOP_MONITOR $EXTERNAL_MONITOR
#echo $AVAILABLE

#CONNECTED="eDP-1-1 DP-1-2"
echo $CONNECTED
INIT="xrandr"
INDEX=0
for MONITOR in $CONNECTED
do
	X_POS=$(( INDEX * OFFSET ))
	INIT="$INIT --output $MONITOR --mode $RESOLUTION --pos ${X_POS}x0"
	if [[ $INDEX == 1 ]]; then
		INIT="$INIT --primary"
	fi

	INDEX=$(( INDEX + 1 ))
done

echo $INIT
$($INIT)
#if [[ $CONNECTED == *"$LAPTOP_MONITOR"* ]]; then
#	echo "$LAPTOP_MONITOR Connected"
#	if [[ $CONNECTED == *"$EXTERNAL_MONITOR"* ]]; then
#		echo "$EXTERNAL_MONITOR Connected"
    	#xrandr --output $LAPTOP_MONITOR --mode $RESOLUTION --pos 0x0 --output $EXTERNAL_MONITOR --primary --mode $RESOLUTION --pos 3840x0
#	else
		#xrandr --output $LAPTOP_MONITOR --mode $RESOLUTION --pos 0x0 --primary --output $EXTERNAL_MONITOR --off
	# xrandr --output eDP1 --mode $RESOLUTION --pos 0x0 --primary --output DP2 --off
#	fi
#fi
