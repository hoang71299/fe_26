#include <iostream>

using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int value) {
        data = value;
        left = NULL;
        right = NULL;
    }
};

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

int main() {
    Node* root = new Node(1);
    root->left = new Node(2);
    root->left->left = new Node(3);
    root->left->right = new Node(4);
    root->right = new Node(5);

    cout << "Cay ban dau:" << endl;
    cout << root->left->data << " <- " << root->data << " -> " << root->right->data << endl;

    root = deleteNode(root);

    cout << "Cay sau khi xoa tat ca cac nut:" << endl;
    if (root == NULL) {
        cout << "NULL" << endl;
    } else {
        cout << root->data << endl;
    }
    return 0;
}