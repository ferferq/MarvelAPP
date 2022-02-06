import React from 'react';

import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../theme';

interface ILoading {
    size?: number | 'large' | 'small';
    color?: string;
}

export function Loading({ size, color = COLORS.COLOR_PRIMARY } : ILoading) {
    return (
        <ActivityIndicator size={size} color={color}/>
    )
}