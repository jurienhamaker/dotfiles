#!/bin/bash

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Launch Polybar, using default config location ~/.config/polybar/config
for screen in $(bspc query -M --names)
do
    echo "start polybar at $screen"
    BAR_TARGET=$screen polybar default &
done

echo "Polybar launched..."
