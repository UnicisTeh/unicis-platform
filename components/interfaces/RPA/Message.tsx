import { ReactNode } from 'react';
import SectionMessage, { SectionMessageAction, Appearance } from '@atlaskit/section-message';

const Message = ({
    title,
    appearance,
    text
}: {
    title?: string,
    appearance?: Appearance | undefined,
    text: ReactNode

}) => {
    return (
        <div style={{margin: '5px'}}>
            <SectionMessage title={title} appearance={appearance}>
                  <p>
                    {text}
                  </p>
                </SectionMessage>
        </div>
    )
}

export default Message