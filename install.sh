#!/bin/bash
CURRENTDIR=$(dirname $0)

CURRENTDIR=$(readlink -f $CURRENTDIR)
cd $CURRENTDIR;

sudo pacman -Sy --noconfirm < pacman.packages
yay < yay.packages

echo "Linking Xresources"
ln -sf $CURRENTDIR/config/.Xresources ~/

echo "Linking Compton"
rm -rf ~/.config/compton
ln -sf $CURRENTDIR/config/compton ~/.config/

echo "Linking i3"
rm -rf ~/.config/i3
ln -sf $CURRENTDIR/config/i3 ~/.config/

echo "Linking Polybar"
rm -rf ~/.config/polybar
ln -sf $CURRENTDIR/config/polybar ~/.config/

echo "Linking Flashfocus"
rm -rf ~/.config/flashfocus
ln -sf $CURRENTDIR/config/flashfocus ~/.config/

echo "Linking Konsole"
rm -rf ~/.local/share/konsole
ln -sf $CURRENTDIR/config/konsole ~/.local/share/

echo "Linking Code"
ln -sf $CURRENTDIR/config/code/settings.json ~/.config/Code\ -\ OSS/User/

echo "Linking wallpaper"
rm -rf ~/.wallpaper.png
ln -sf $CURRENTDIR/config/.wallpaper.png ~/

echo "Linking screenlayout"
rm -rf ~/.screenlayout.sh
sudo rm -rf /etc/udev/rules.d/screenlayout.rules
ln -sf $CURRENTDIR/config/screenlayout/.screenlayout.sh ~/
sudo ln -sf $CURRENTDIR/config/screenlayout/screenlayout.rules /etc/udev/rules.d/
echo "~/.screenlayout.sh" >> ~/.profile

echo "Installing oh-my-zsh"
rm -rf ~/.oh-my-zsh
sh -c "KEEP_ZSHRC='yes' RUNZSH='no' $(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
rm -rf ~/.oh-my-zsh
find $CURRENTDIR/config/zsh -maxdepth 1 -printf "%f\n" | while read file; do ln -sf "$CURRENTDIR/config/zsh/$file" ~/; done
