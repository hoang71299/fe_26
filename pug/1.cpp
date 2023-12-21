

Node* deleteNode(Node* root) {
    if (root == NULL) {
        return NULL;
    }
    if (root->left == NULL && root->right == NULL) {
        return NULL;
    }
    if (root->left != NULL && root->right == NULL) {
        return deleteNode(root->left);
    }
    if (root->left == NULL && root->right != NULL) {
        return deleteNode(root->right);
    }
    root->left = deleteNode(root->left);
    root->right = deleteNode(root->right);
    return root;
}

