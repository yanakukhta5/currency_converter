import './TemplateName.scss'

import { clsx } from 'clsx'
import React, { FC, forwardRef, LegacyRef, memo, useMemo } from 'react'

import { BaseProps } from '@/shared/types'

export type TemplateNameProps = BaseProps & {}

export const TemplateName: FC<TemplateNameProps> = memo(
  forwardRef(({ ref, className = '', ...props }) => {
    const classes = useMemo(
      () => clsx('cui-template-name', className).trim(),
      [className]
    )

    return (
      <div
        ref={ref as LegacyRef<any>}
        className={classes}
        data-testid="TemplateName"
        {...props}
      />
    )
  })
)
