import { FC } from 'react';
import classnames from 'classnames';
import Downshift from 'downshift';
import { ChevronDown } from 'react-feather';

type Props = {
  className?: string;
  value: string;
  options: string[];
  onChangeSelection: () => void;
};

const SemesterSelector: FC<Props> = (props) => (
  <div>
    <Downshift onSelect={() => undefined}>
      {(downshift) => (
        <div>
          <button
            className={classnames(props.className, 'btn btn-outline-primary')}
            type="button"
            onClick={() => downshift.toggleMenu()}
            style={{ width: '100%', display: 'inline-block' }}
          >
            Semester 1 - AY2021/2022
            <ChevronDown className={classnames('svg-small')} style={{ marginLeft: '0.5rem' }} />
          </button>
          <ul
            {...downshift.getMenuProps()}
            className={classnames('dropdown-menu', { show: downshift.isOpen })}
          >
            <li className="dropdown-item">Test</li>
          </ul>
        </div>
      )}
    </Downshift>
  </div>
);

export default SemesterSelector;
