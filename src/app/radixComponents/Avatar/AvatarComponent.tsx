'use client'
import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './styles.css';

interface AvatarComponentProps{
    username: string,
    url_image?: string
}

const AvatarComponent = ({username, url_image}: AvatarComponentProps) => (
  <div style={{ display: 'flex', gap: 20 }}>
    
    <Avatar.Root className="flex w-10 h-10 rounded-full bg-slate-400 items-center justify-center">
      {url_image && 
        <Avatar.Image
          className="AvatarImage"
          src={url_image}
          alt="Pedro Duarte"
        />
      }
      <Avatar.Fallback delayMs={600}>
        {username}
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarComponent;