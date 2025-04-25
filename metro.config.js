const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.blockList = [/\.expo-file-system-ub9CUaK8\/build/];

module.exports = config;