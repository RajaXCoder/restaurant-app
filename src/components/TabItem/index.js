import './style.css'

const TabItem = ({tabItem, activeTab, changeTab}) => {
  const {menu_category: menuName, menu_category_id: id} = tabItem

  const onClickTabButton = () => {
    changeTab(id)
  }

  return (
    <li
      className={
        activeTab === id ? 'tab-item-as-list active-tab' : 'tab-item-as-list'
      }
    >
      <button
        onClick={onClickTabButton}
        className="tab-item-as-list-button"
        type="button"
      >
        {menuName}
      </button>
    </li>
  )
}

export default TabItem
