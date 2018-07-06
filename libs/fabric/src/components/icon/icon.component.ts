import { ChangeDetectionStrategy, Component, Input, ElementRef, ViewChild } from '@angular/core';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { ReactWrapperComponent } from '@angular-react/core';

@Component({
  selector: 'fab-icon',
  exportAs: 'fabIcon',
  template: `
    <Icon
      #reactNode
      [iconName]="iconName"
      [ariaLabel]="ariaLabel"
      [iconType]="iconType"
      [imageProps]="imageProps"
      [imageErrorAs]="imageErrorAs"
      [styles]="styles">
    </Icon>
  `,
  styles: ['react-renderer'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'fab-icon',
  }
})
export class FabIconComponent extends ReactWrapperComponent<IIconProps> {
  @ViewChild('reactNode') protected reactNodeRef: ElementRef;

  @Input() iconName?: IIconProps['iconName'];
  @Input() ariaLabel?: IIconProps['ariaLabel'];
  @Input() iconType?: IIconProps['iconType'];
  @Input() imageProps?: IIconProps['imageProps'];
  @Input() imageErrorAs?: IIconProps['imageErrorAs'];
  @Input() styles?: IIconProps['styles'];

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
